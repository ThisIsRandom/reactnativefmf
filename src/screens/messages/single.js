import { Box, HStack, Pressable, Text, VStack } from "native-base"

const Single = ({ onPress }) => {
    return (
        <Pressable
            onPress={onPress}
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
                            "Samtale om "
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
}

export default Single