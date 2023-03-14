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
    const [primaryColor, secondaryColor] = useToken( // the key within the theme, in this case `theme.colors`
  'colors', // the subkey(s), resolving to `theme.colors.warning.1`
  ['fmf.primary', 'fmf.secondary'] // a single fallback or fallback array matching the length of the previous arg
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
                    )
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
                }}
            />
            <Tab.Screen
                name="messages"
                component={MessageStack}
                options={{
                    tabBarIcon: props => (
                        <MaterialIcon name="mail" {...props} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

export default GeneralTabs;