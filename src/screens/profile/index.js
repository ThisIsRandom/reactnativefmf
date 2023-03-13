import { useIsFocused } from '@react-navigation/native';
import { View, Text, VStack, HStack, ScrollView, FormControl, Input, Button, Box } from 'native-base'
import { TouchableOpacity, Image } from 'react-native';
import { cloneElement, useEffect, useReducer, useState } from 'react';
import Loading from '../../components/loading';
import useAuth from '../../service/auth';
import useUser from '../../service/user';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { launchImageLibrary } from 'react-native-image-picker'

const images = {
    address: <FA5 name="house-user" size={20}/>,
    postal: <Entypo name="location" size={22}/>,
    city: <FA5 name="city" size={16}/>,
    phone: <AntDesign name="phone" size={20}/>,
    email: <Fontisto name="email" size={20} color="#595048" style={{marginLeft: 5}}/>
}

const ProfileScreen = ({ navigation }) => {
    const { userQuery, mutation } = useUser()
    const isFocused = useIsFocused();
    const { logout } = useAuth()

    const [image, setImage] = useState([])

    const [state, dispatch] = useReducer((state, action) => {
        return {
            ...state,
            ...action
        }
    }, {
        phone: "",
        city: "",
        address: "",
        postal: ""
    })

    useEffect(() => {
        if (!userQuery.data || !isFocused) return
        dispatch({
            phone: userQuery.data?.contactInformation?.phone,
            city: userQuery.data?.contactInformation?.city,
            address: userQuery.data?.contactInformation?.address,
            postal: userQuery.data?.contactInformation?.postal,
        })
    }, [userQuery.data, isFocused])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    variant="unstyled"
                    onPress={() => logout()}
                >
                    <SimpleLineIcons name="logout" size={30} color="#595048" />
                </Button>
            ),
        });
    }, [navigation])

    const save = () => {
        mutation.mutate({
            ...userQuery.data,
            contactInformation: {
                ...userQuery.data.contactInformation,
                ...state
            }
        })
    }

    if (userQuery.isLoading) return <Loading />

    return (
        <ScrollView>
            <VStack
                alignItems="center"
                flexBasis="100%"
                padding={10}
                space={5}
            >
                <Box 
                    alignItems={"flex-start"}
                    justifyContent={"flex-end"}
                    w="200"
                    h="200"
                >
                    <Box
                        w="200"
                        h="200"
                        borderWidth={"2"}
                        overflow={"hidden"}
                        rounded={"100"}
                        position="absolute"
                    >
                    <Image
                        source={image}
                        style={{flex: 1}}
                        resizeMode="cover"
                    />
                    </Box>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: "#595048",
                            marginBottom: 6,
                            marginLeft: 6,
                            width: 46,
                            height: 46,
                            borderRadius: 12,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        onPress={() => {
                            launchImageLibrary().then((response) => {
                                setImage((p) => [...response.assets])
                            })
                        }}
                    >
                        <FA5 name="camera" size={30} color="white"/>
                    </TouchableOpacity>
                </Box>
                <Box
                    w="100%"
                >
                    <HStack
                        backgroundColor="green"
                    >
                        <Input
                            flex={1}
                            editable={false}
                            value={userQuery.data.email}
                            InputLeftElement={images["email"]}
                        />
                    </HStack>
                </Box>
                <View
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                    flex={1}
                    justifyContent="space-between"
                >
                    {
                        Object.entries(state).map(([key, val]) => {
                            return (
                                <Box
                                    flexBasis={"48%"}
                                    mb={4}
                                >
                                    <FormControl key={key}>
                                    <HStack
                                        backgroundColor="green"
                                    >
                                        <Input
                                          
                                            flex={1}
                                            value={val}
                                            onChangeText={v => dispatch({ [key]: v })}
                                            InputLeftElement={cloneElement(images[key], {
                                                style: {
                                                    marginLeft: 5
                                                },
                                                color:"#595048"
                                            })}
                                        />
                                    </HStack>
                                </FormControl>
                                </Box>
                            )
                        })
                    }
                </View>
                <HStack>
                        <Button onPress={save}
                            backgroundColor="#595048"
                        >
                            Gem
                        </Button>
                    </HStack>
            </VStack>
        </ScrollView>
    )
}

export default ProfileScreen;