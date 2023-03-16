import { useNavigation } from '@react-navigation/native'
import { View, Text, VStack } from 'native-base'
import { useEffect } from 'react'
import Loading from '../../components/loading'
import useStreamByUser from '../../service/stream-by-user'
import Single from './single'

const BusinessList = () => {
    const { query } = useStreamByUser()
    const navigation = useNavigation()

    if (query.isLoading) return <Loading />

    if (!query.data.length) return <Text>Ingen beskeder</Text>

    return (
        <VStack
            space={5}
        >
            {
                query.data.map(stream => {
                    return (
                        <Single
                            title={stream.title}
                            onPress={() => navigation.navigate("message", { streamId: stream.ID })}
                        />
                    )
                })
            }
        </VStack>
    )
}

export default BusinessList