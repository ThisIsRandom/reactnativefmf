import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskDetailScreen, TasksScreen } from '../screens';

const Stack = createNativeStackNavigator();

const TaskStack = () => {
    return (
        <Stack.Navigator

        >
            <Stack.Screen
                name="tasks"
                component={TasksScreen}
            />
            <Stack.Screen
                name="task-detail"
                component={TaskDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default TaskStack