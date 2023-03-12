import { Text, View } from 'native-base'

const SingleItem = ({ children }) => {
    return (
        <View
            style={{
                backgroundColor: "rgba(0,0,0,.2)"
            }}
            mb={5}
            h={150}
            rounded="xl"
            shadow="xl"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <Text
                fontSize={16}
                fontWeight="bold"
                style={{
                    color: "rgba(0,0,0,.4)"
                }}
            >
                PLACEHOLDER
            </Text>
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,.5)"
                }}
                alignItems="center"
                py={3}

            >
                <Text
                    color="white"
                >
                    {children}
                </Text>
            </View>
        </View>
    )
}

export default SingleItem;