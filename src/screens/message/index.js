import { View, Text, HStack, Input, Button, VStack, ScrollView } from 'native-base'
import { useEffect, useState, useRef } from 'react'
import Loading from '../../components/loading'
import useMessages from '../../service/message'
import useMessageStream from '../../service/message-stream'

const MessageScreen = ({ route }) => {
    const [inp, setInp] = useState("")

    const { streamId } = route.params

    const { query } = useMessageStream(streamId)

    const { messageMutation } = useMessages()

    const ref = useRef()

    if (query.isLoading) return <Loading />

    return (
        <View
            flex={1}
        >
            <ScrollView
                ref={ref}
                onContentSizeChange={() => ref.current.scrollToEnd({ animated: true })}
                flex={1}
            >
                <VStack
                    space={3}
                    px={3}
                >
                    {
                        query.data.messages.map(message => {
                            return (
                                <View
                                    bg="white"
                                    p={3}
                                    rounded="sm"
                                >
                                    <Text
                                        color={"black"}
                                    >
                                        {message.user.email + " siger: "}
                                    </Text>
                                    <Text
                                        color={"black"}
                                    >
                                        {message.text}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </VStack>
            </ScrollView>
            <HStack w="full">
                <Input
                    value={inp}
                    onChangeText={setInp}
                    flex={1}
                />
                <Button
                    onPress={() => {
                        messageMutation.mutate(
                            {
                                message: {
                                    text: inp,
                                    messageStreamId: streamId
                                }
                            }
                        )

                        setInp("")
                    }}
                >
                    <Text>
                        send
                    </Text>
                </Button>
            </HStack>
        </View>
    )
}

export default MessageScreen