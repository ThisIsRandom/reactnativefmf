import { View, Text, AspectRatio, ScrollView, Box, VStack } from 'native-base'
import { Image } from 'react-native'
import { useEffect } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import Loading from '../../components/loading'
import useSingleTasks from '../../service/single-task'
import image1 from '../../../images/GenericTattooShop.jpg'
import image2 from '../../../images/GenericTattooShop.jpg'
import image3 from '../../../images/Logo.png'
import { useToken } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const TaskDetailScreen = ({ route }) => {
    const { taskId } = route.params

    const [primaryColor, secondaryColor] = useToken(
        'colors',
        ['fmf.primary', 'fmf.secondary']
    );

    const { query } = useSingleTasks(taskId)

    const images = [
        image1,
        image2,
        image3
    ]

    useEffect(() => {
        console.log(query.data)
    }, [query.data])

    if (query.isLoading) return <Loading />

    return (
        <ScrollView>
            <SliderBox 
                images={images}
                sliderBoxHeight={400}
                dotColor={primaryColor}
                inactiveDotColor={secondaryColor}
            />
            <VStack
                flexBasis={"100%"}
                alignItems={"center"}
                space={5}
            >
                <Box
                    w={"80%"}
                    alignItems={"center"}
                >
                    <Box
                        flexDir={"row"}
                        w={"50%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        height={8}
                        borderBottomWidth={1}
                    >
                        <MaterialCommunityIcons name="format-title" color="black" size={30} style={{position: "absolute", left: 0}}/>
                        <Text>Titel</Text>
                    </Box>
                    <Text
                        fontSize={32}
                    >
                        {query.data.title}
                    </Text>
                </Box>
                <Box
                    w={"80%"}
                    alignItems={"center"}
                >
                    <Box
                        flexDir={"row"}
                        w={"50%"}
                        justifyContent={"center"}
                        borderBottomWidth={1}
                        height={8}
                        alignItems={"center"}
                    >
                        <MaterialCommunityIcons name="subtitles-outline" color="black" size={30} style={{position: "absolute", left: 0}}/>
                        <Text>Beskrivelse</Text>
                    </Box>
                    <Text
                        fontSize={16}
                    >
                        {query.data.description} 
                    </Text>
                </Box>
            </VStack>
        </ScrollView>
    )
}

export default TaskDetailScreen