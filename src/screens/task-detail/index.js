import { View, Text } from 'native-base'
import { useEffect } from 'react'
import Loading from '../../components/loading'
import useSingleTasks from '../../service/single-task'

const TaskDetailScreen = ({ route }) => {
    const { taskId } = route.params

    const { query } = useSingleTasks(taskId)

    useEffect(() => {
        console.log(query.data)
    }, [query.data])

    if (query.isLoading) return <Loading />

    return (
        <View>
            <Text>
                Task detail
            </Text>
        </View>
    )
}

export default TaskDetailScreen