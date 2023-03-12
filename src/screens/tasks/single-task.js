import { Box, Button, HStack, Text, View } from "native-base"

import ADLogo from 'react-native-vector-icons/AntDesign'

const SingleTask = ({ children, onClickMessage, business }) => {
    return (
        <HStack
            space={5}
            bg="gray.400"
            alignItems="center"
        >
            <Box
                h={100}
                w={100}
                bg="red.100"
            >

            </Box>
            <View
                flex={1}
            >
                {children}
            </View>
            {
                business && (
                    <Button
                        variant="unstyled"
                        onPress={onClickMessage}
                    >
                        <ADLogo
                            name="message1"
                            size={25}
                            color="white"
                        />
                    </Button>
                )
            }
        </HStack>
    )
}

export default SingleTask;