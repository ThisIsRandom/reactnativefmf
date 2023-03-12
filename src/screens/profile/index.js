import { useIsFocused } from '@react-navigation/native';
import { View, Text, VStack, HStack, ScrollView, FormControl, Input, Button } from 'native-base'
import { useEffect, useReducer } from 'react';
import Loading from '../../components/loading';
import useAuth from '../../service/auth';
import useUser from '../../service/user';

const ProfileScreen = ({ navigation }) => {
    const { userQuery, mutation } = useUser()
    const isFocused = useIsFocused();
    const { logout } = useAuth()

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
            postal: userQuery.data?.contactInformation?.postal
        })
    }, [userQuery.data, isFocused])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    variant="unstyled"
                    onPress={() => logout()}
                >
                    Logud
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
                padding={10}
                space={5}
            >
                <HStack
                    alignItems="center"
                    space={5}
                >
                    <View
                        bg="red.100"
                        w={100}
                        h={100}
                        rounded="full"
                    />
                    <Text
                        fontSize={15}
                        fontWeight="bold"
                    >
                        {userQuery.data.email}
                    </Text>
                </HStack>
                <VStack
                    w="full"
                >
                    {
                        Object.entries(state).map(([key, val]) => {
                            return (
                                <FormControl key={key}>
                                    <VStack>
                                        <FormControl.Label>
                                            {key}
                                        </FormControl.Label>
                                        <Input
                                            value={val}
                                            onChangeText={v => dispatch({ [key]: v })}
                                        />
                                    </VStack>
                                </FormControl>
                            )
                        })
                    }
                    <HStack>
                        <Button onPress={save}>
                            Gem
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </ScrollView>
    )
}

export default ProfileScreen;