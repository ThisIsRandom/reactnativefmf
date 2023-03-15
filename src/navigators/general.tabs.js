import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdvertisementScreen, ProfileScreen, TasksScreen } from '../screens';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import FA5Icon from 'react-native-vector-icons/FontAwesome5'
import MessageStack from './message.stack';
import TaskStack from './task.stack';
import { useToken } from 'native-base';

const Tab = createBottomTabNavigator();

function GeneralTabs() {
    const [primaryColor, secondaryColor] = useToken(
        'colors',
        ['fmf.primary', 'fmf.secondary']
    );

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    color: secondaryColor
                },
                tabBarActiveTintColor: secondaryColor,
                tabBarStyle: {
                    backgroundColor: primaryColor
                }
            }}        
        >
            <Tab.Screen
                name="advertisement"
                component={AdvertisementScreen}
                options={{
                    tabBarIcon: props => (
                        <MaterialIcon name="local-offer" {...props}/>
                    ),
                    title: "Reklamer"
                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: props => (
                        <FAIcon name="user" {...props} />
                    ),
                    title: "Profil"
                }}
            />
            <Tab.Screen
                name="tasks"
                component={TaskStack}
                options={{
                    tabBarIcon: props => (
                        <FA5Icon name="tasks" {...props} />
                    ),
                    headerShown: false,
                    title: "Opgaver"
                }}
            />
            <Tab.Screen
                name="messages"
                component={MessageStack}
                options={{
                    tabBarIcon: props => (
                        <MaterialIcon name="mail" {...props} />
                    ),
                    headerShown: false,
                    title: "Beskeder"
                }}
            />
        </Tab.Navigator>
    );
}

export default GeneralTabs;