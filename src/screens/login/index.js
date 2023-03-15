import { View, Text, Input, VStack, HStack, Button, Box, theme } from 'native-base'
import { Image } from 'react-native'
import { useCallback, useState } from 'react';
import { useAuthProvider } from '../../providers/auth';
import useAuth from '../../service/auth';
import Logo from '../../../images/Logo.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'

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
            bg="fmf.primary"
            justifyContent="center"
        >
            <HStack
                position={"absolute"}
                top={0}
                flexDirection={"row"}
                space="2"
                p={2}
                left={0}
            >
                <Button
                    onPress={() => setCredentials({ email: "test@test.dk", password: "test" })}
                    bg={"fmf.secondary"}
                    width={12}
                    alignItems={"center"}
                >
                    <AntDesign name="user" size={20} width={20}/>
                </Button>
                <Button
                    onPress={() => setCredentials({ email: "business@business.dk", password: "test" })}
                    background={"fmf.secondary"}
                    alignItems={"center"}
                    width={12}
                >
                    <Foundation name="torso-business" size={20}/>
                </Button>
            </HStack>
            <VStack
                space="50"
                alignItems={"center"}
            >
                <Image 
                    source={Logo}
                    style={{width: 150, height: 150}}
                />
                <VStack
                    space="md"
                    width={"100%"}
                >
                    <Input
                        value={credentials.email}
                        placeholder={"email"}
                        bg={"white"}
                        borderColor={"black"}
                        borderWidth={1}
                        onChangeText={v => setCredentials(p => ({ ...p, email: v }))}
                    />
                    <Input
                        value={credentials.password}
                        borderWidth={1}
                        placeholder={"password"}
                        borderColor={"black"}
                        bg={"white"}
                        onChangeText={v => setCredentials(p => ({ ...p, password: v }))}
                    />
                    <HStack
                        space="md"
                    >
                        <Button
                            onPress={onSubmit}
                            variant="unstyled"
                            flex={1}
                        >
                            <Text
                                color={"white"}
                            >
                                Login
                            </Text>
                        </Button>
                        <Button
                            flex={1}
                            variant="link"
                            onPress={goToRegister}
                            bg={"fmf.primary"}
                        >
                            <Text
                                color={"fmf.secondary"}
                            >Registrer</Text>
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </View>
    )
}

export default LoginScreen;