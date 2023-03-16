import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskDetailScreen, TasksScreen } from '../screens';
import { useToken } from 'native-base';

const Stack = createNativeStackNavigator();

const TaskStack = () => {
    const [primaryColor, secondaryColor] = useToken(
        'colors',
        ['fmf.primary', 'fmf.secondary']
    );

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: primaryColor
                },
                headerTitleStyle: {
                    color: "white"
                },
                headerTintColor: "white"
            }}
        >
            <Stack.Screen
                name="tasks"
                component={TasksScreen}
                options={{
                    title: "Opgaver"
                }}
            />
            <Stack.Screen
                name="task-detail"
                component={TaskDetailScreen}
                options={{
                    title: "Opgave"
                }}
            />
        </Stack.Navigator>
    )
}

export default TaskStack