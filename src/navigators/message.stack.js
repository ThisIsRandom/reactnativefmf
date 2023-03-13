import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loading from '../components/loading';
import { MessageScreen, MessagesScreen } from '../screens';
import useUser from '../service/user';

const Stack = createNativeStackNavigator()

const MessageStack = () => {
    return (
        <Stack.Navigator
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