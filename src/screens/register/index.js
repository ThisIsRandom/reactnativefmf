import { useState } from 'react';
import { View, Text, VStack, Input, HStack, Button } from 'native-base'
import { Image } from 'react-native'
import useAuth from '../../service/auth';
import Logo from '../../../images/Logo.png'

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
            bg="fmf.primary"
            justifyContent="center"
        >
            <VStack
                alignItems={"center"}
                space={50}
            >
                <Image 
                        source={Logo}
                        style={{width: 150, height: 150}}
                    />
                <VStack
                    space={"sm"}
                    alignItems={"center"}
                >
                    <Input
                        placeholder="email"
                        value={credentials.email}
                        bg={"white"}
                        borderColor={"black"}
                        borderWidth={1}
                        onChangeText={v => setCredentials(p => ({ ...p, email: v }))}
                    />
                    <Input
                        placeholder="password"
                        value={credentials.password}
                        bg={"white"}
                        borderColor={"black"}
                        borderWidth={1}
                        onChangeText={v => setCredentials(p => ({ ...p, password: v }))}
                    />
                    <Input
                        placeholder="gentag password"
                        value={credentials.repeat}
                        bg={"white"}
                        borderColor={"black"}
                        borderWidth={1}
                        onChangeText={v => setCredentials(p => ({ ...p, repeat: v }))}
                    />
                    <Input
                        placeholder="navn"
                        value={credentials.name}
                        bg={"white"}
                        borderColor={"black"}
                        borderWidth={1}
                        onChangeText={v => setCredentials(p => ({ ...p, name: v }))}
                    />
                    <HStack>
                        <Button
                            onPress={() => register(credentials)}
                            flex={1}
                            variant="unstyled"
                        >
                            Register
                        </Button>
                        <Button
                            flex={1}
                            variant="link"
                            onPress={navigation.goBack}
                            bg={"fmf.primary"}
                        >
                            <Text
                                color={"fmf.secondary"}
                            >Tilbage til login</Text>
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </View>
    )
}

export default RegisterScreen;