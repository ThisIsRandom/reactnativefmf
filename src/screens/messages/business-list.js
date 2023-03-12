import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'native-base'
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
        <View>
            {
                query.data.map(stream => {
                    return (
                        <Single
                            onPress={() => navigation.navigate("message", { streamId: stream.ID })}
                        />
                    )
                })
            }
        </View>
    )
}

export default BusinessList