import { View, Text, Input, VStack, HStack, Button, Box } from 'native-base'
import { useCallback, useState } from 'react';
import { useAuthProvider } from '../../providers/auth';
import useAuth from '../../service/auth';

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();

    const [credentials, setCredentials] = useState(() => ({
        email: "",
        password: ""
    }))

    const goToRegister = useCallback(() => navigation.navigate("register"), [])
    const onSubmit = () => login(credentials.email, credentials.password)

    return (
        <View
            padding={10}
            flex={1}
            justifyContent="center"
        >
            <VStack
                space="2xl"
            >
                <Box
                    w={100}
                    h={100}
                    bg="red.100"
                    marginX="auto"
                >
                    Image
                </Box>
                <Box>
                    <Button
                        onPress={() => setCredentials({ email: "test@test.dk", password: "test" })}
                    >
                        as user
                    </Button>
                    <Button
                        onPress={() => setCredentials({ email: "business@business.dk", password: "test" })}

                    >
                        as business
                    </Button>
                </Box>
                <VStack
                    space="md"
                >
                    <Input
                        value={credentials.email}
                        onChangeText={v => setCredentials(p => ({ ...p, email: v }))}
                    />
                    <Input
                        value={credentials.password}
                        onChangeText={v => setCredentials(p => ({ ...p, password: v }))}
                    />
                    <HStack
                        space="md"
                    >
                        <Button
                            onPress={onSubmit}
                            flex={1}
                        >
                            Login
                        </Button>
                        <Button
                            flex={1}
                            variant="link"
                            onPress={goToRegister}
                        >
                            Registrer
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </View>
    )
}

export default LoginScreen;