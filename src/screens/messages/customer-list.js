import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable, VStack, Box, HStack } from 'native-base'
import Loading from '../../components/loading'
import useMessages from '../../service/message'

const CustomerList = () => {
    const { query } = useMessages()

    const navigation = useNavigation()

    if (query.isLoading) return <Loading />

    if (!query.data.length) return <Text>Du har ingen beskeder</Text>

    return (
        <View>
            {
                query.data.map(t => {
                    return (
                        t.messageStreams.map(messageStream => {
                            return (
                                <Pressable
                                    onPress={() => navigation.navigate("message", { streamId: messageStream.ID })}
                                >
                                    <VStack
                                        bg="white"
                                        p={3}
                                    >
                                        <Box>
                                            <Text
                                                color={"black"}
                                            >
                                                {
                                                    "Samtale om " + t.title
                                                }
                                            </Text>
                                        </Box>
                                        <HStack>
                                            <Text
                                                color={"black"}
                                            >
                                                {">"}
                                            </Text>
                                        </HStack>
                                    </VStack>
                                </Pressable>
                            )
                        })
                    )
                })
            }
        </View>
    )
}

export default CustomerList