import { View, Text, AspectRatio, ScrollView } from 'native-base'
import { Image } from 'react-native'
import { useEffect } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import Loading from '../../components/loading'
import useSingleTasks from '../../service/single-task'
import image1 from '../../../images/GenericTattooShop.jpg'
import image2 from '../../../images/GenericTattooShop.jpg'
import image3 from '../../../images/Logo.png'
import { useToken } from 'native-base';


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
            <View
                marginLeft={2}
            >
                <Text
                    fontSize={32}
                >
                    {query.data.title}
                </Text>
                <Text
                    fontSize={16}
                >
                    {query.data.description}
                </Text>
            </View>
        </ScrollView>
    )
}

export default TaskDetailScreen