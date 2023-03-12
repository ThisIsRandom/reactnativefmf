import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GeneralTabs from './general.tabs';

const Stack = createNativeStackNavigator()

const MainStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name="generalTabs"
            component={GeneralTabs}
        />
    </Stack.Navigator>
)

export default MainStack;