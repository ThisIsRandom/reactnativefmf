import { useState } from 'react';
import { View, Text, VStack, Input, HStack, Button } from 'native-base'
import useAuth from '../../service/auth';

const RegisterScreen = ({ navigation }) => {
    const [credentials, setCredentials] = useState(() => ({
        email: "",
        password: "",
        repeat: "",
        name: ""
    }))

    const { register } = useAuth()

    return (
        <View
            padding={10}
            flex={1}
            justifyContent="center"
        >
            <VStack
                space={"sm"}
            >
                <Input
                    placeholder="email"
                    value={credentials.email}
                    onChangeText={v => setCredentials(p => ({ ...p, email: v }))}
                />
                <Input
                    placeholder="password"
                    value={credentials.password}
                    onChangeText={v => setCredentials(p => ({ ...p, password: v }))}
                />
                <Input
                    placeholder="gentag password"
                    value={credentials.repeat}
                    onChangeText={v => setCredentials(p => ({ ...p, repeat: v }))}
                />
                <Input
                    placeholder="navn"
                    value={credentials.name}
                    onChangeText={v => setCredentials(p => ({ ...p, name: v }))}
                />
                <HStack>
                    <Button
                        onPress={() => register(credentials)}
                        flex={1}
                    >
                        Register
                    </Button>
                    <Button
                        flex={1}
                        variant="link"
                        onPress={navigation.goBack}
                    >
                        Tilbage til login
                    </Button>
                </HStack>
            </VStack>
        </View>
    )
}

export default RegisterScreen;