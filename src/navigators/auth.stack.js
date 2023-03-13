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
            options={{
                title: "Login"
            }}
        />
        <Stack.Screen
            name="register"
            component={RegisterScreen}
            options={{
                title: "Registrer"
            }}
        />
    </Stack.Navigator>
)

export default AuthStack;