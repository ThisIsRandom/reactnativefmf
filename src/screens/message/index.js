import { View, Text, HStack, Input, Button, VStack, ScrollView } from 'native-base'
import { useEffect, useState, useRef, useMemo } from 'react'
import Loading from '../../components/loading'
import useMessages from '../../service/message'
import useMessageStream from '../../service/message-stream'

const getColor = () => {
    return
}

const MessageScreen = ({ route }) => {
    const [inp, setInp] = useState("")

    const { streamId } = route.params

    const { query } = useMessageStream(streamId)

    const { messageMutation } = useMessages()

    const colors = useMemo(() => {
        if (!query.data) return

        const _colors = [
            "fmf.primary",
            "fmf.secondary"
        ]

        const _style = [
            {
                width: "3/4",
            },
            {
                width: "3/4",
                marginLeft: "1/4"
            },
        ]

        const mapping = {}

        const emails = new Set(query.data.messages.map(m => m.user.email))

        Array.from(emails).forEach((email, id) => {
            mapping[email] = {
                bg: _colors[id],
                ..._style[id]
            }
        })

        console.log(mapping)

        return mapping;
    }, [query.data])

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
                py={3}
            >
                <VStack
                    space={3}
                    px={3}
                >
                    {
                        query.data.messages.map(message => {
                            return (
                                <View
                                    p={3}
                                    rounded="sm"


                                    {
                                    ...colors[message.user.email]
                                    }
                                >
                                    <Text
                                        color={"white"}
                                        fontWeight="bold"
                                    >
                                        {message.user.email + " siger: "}
                                    </Text>
                                    <Text
                                        color={"white"}
                                    >
                                        {message.text}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </VStack>
            </ScrollView>
            <HStack w="full" p={2} space={2} borderTopWidth={1} borderTopColor="gray.300">
                <Input
                    value={inp}
                    onChangeText={setInp}
                    flex={1}
                    borderColor="fmf.secondary"
                    _focus={{
                        borderColor: "fmf.primary",
                        backgroundColor: "white"
                    }}
                />
                <Button
                    variant="unstyled"
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
                    <Text
                        color="white"
                        fontWeight="bold"
                    >
                        SEND
                    </Text>
                </Button>
            </HStack>
        </View >
    )
}

export default MessageScreen