import { Box, HStack, Pressable, Text } from "native-base"

const Single = ({ onPress, title }) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <HStack
                bg="fmf.primary"
                px={3}
                py={5}
                justifyContent="space-between"
                rounded="md"
            >
                <Box>
                    <Text
                        color={"white"}
                        fontWeight="bold"
                        fontSize="sm"
                    >
                        {
                            "Samtale om " + title
                        }
                    </Text>
                </Box>
                <HStack>
                    <Text
                        color={"white"}
                    >
                        {">"}
                    </Text>
                </HStack>
            </HStack>
        </Pressable>
    )
}

export default Single