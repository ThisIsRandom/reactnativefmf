import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable, VStack, Box, HStack } from 'native-base'
import { useEffect } from 'react'
import Loading from '../../components/loading'
import useMessages from '../../service/message'
import Single from './single'

const CustomerList = () => {
    const { query } = useMessages()

    const navigation = useNavigation()

    useEffect(() => {
        console.log(query.data)
    }, [query.data])

    if (query.isLoading) return <Loading />

    if (!query.data.length) return <Text>Du har ingen beskeder</Text>

    return (
        <VStack
            space={3}
        >
            {
                query.data.map(t => {
                    return (
                        t.messageStreams.map(messageStream => {
                            return (
                                <Single
                                    onPress={() => navigation.navigate("message", { streamId: messageStream.ID })}
                                    title={t.title}
                                />
                            )
                        })
                    )
                })
            }
        </VStack>
    )
}

export default CustomerList