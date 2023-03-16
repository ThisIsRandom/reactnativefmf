import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loading from '../components/loading';
import { MessageScreen, MessagesScreen } from '../screens';
import useUser from '../service/user';
import { useToken } from 'native-base';

const Stack = createNativeStackNavigator()

const MessageStack = () => {

    const [primaryColor, secondaryColor] = useToken(
        'colors',
        ['fmf.primary', 'fmf.secondary']
    );

    return (
        <Stack.Navigator   
            screenOptions={{
                headerStyle: {
                    backgroundColor: primaryColor
                },
                headerTitleStyle: {
                    color: "white"
                },
                headerTintColor: "white"
            }}
        >
            <Stack.Screen
                name="messages"
                component={MessagesScreen}
                options={{
                    title: "Beskeder"
                }}
            />
            <Stack.Screen
                name="message"
                component={MessageScreen}
                options={{
                    title: "Besked"
                }}
            />
        </Stack.Navigator>
    )
}

export default MessageStack;