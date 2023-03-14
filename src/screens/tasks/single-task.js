import { Box, Button, HStack, Text, View, Image } from "native-base"
import GenericTattooShop from '../../../images/GenericTattooShop.jpg'
import FA5 from 'react-native-vector-icons/FontAwesome5'

import ADLogo from 'react-native-vector-icons/AntDesign'

const SingleTask = ({ children, onClickMessage, business }) => {
    return (
        <HStack
            space={5}
            bg="fmf.primary"
            alignItems="center"
            w={"95%"}
            rounded={"6"}
            overflow={"hidden"}
        >
            <Image 
                source={GenericTattooShop}
                h={100}
                w={100}
            />
            <View
                flex={1}
            >
                {children}
            </View>
            {
                business ? (
                    <Button
                        variant="unstyled"
                        bg={"fmf.primary"}
                        onPress={onClickMessage}
                    >
                        <View
                            mr={2}
                        >
                            <ADLogo name="message1" size={30} color="white" />
                        </View>
                    </Button>
                ) : 
                <View
                    mr={5}
                >
                    <FA5 name="arrow-alt-circle-right" size={30} color="white"/>
                </View>
            }
        </HStack>
    )
}

export default SingleTask;