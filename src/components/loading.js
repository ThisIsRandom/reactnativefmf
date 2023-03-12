import { View, Spinner } from 'native-base'

const Loading = () => {
    return (
        <View
            flex={1}
            justifyContent="center"
            alignItems="center"
        >
            <Spinner />
        </View>
    )
}

export default Loading;