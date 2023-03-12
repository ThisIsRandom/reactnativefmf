import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen, RegisterScreen } from '../screens';

const Stack = createNativeStackNavigator()

const AuthStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name="login"
            component={LoginScreen}
        />
        <Stack.Screen
            name="register"
            component={RegisterScreen}
        />
    </Stack.Navigator>
)

export default AuthStack;