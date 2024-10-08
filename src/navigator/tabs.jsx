import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/TabsScreen/HomeScreen'
import NotificationScreen from '../screens/TabsScreen/NotificationScreen'
import MovieScheduleScreen from '../screens/TabsScreen/MovieScheduleScreen'
import NewsScreen from '../screens/TabsScreen/NewsScreen'
import AccountScreen from '../screens/TabsScreen/AccountScreen'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Notification':
                            iconName = focused ? 'notifications' : 'notifications-outline';
                            break;
                        case 'MovieSchedule':
                            iconName = focused ? 'calendar' : 'calendar-outline';
                            break;
                        case 'News':
                            iconName = focused ? 'newspaper' : 'newspaper-outline';
                            break;
                        case 'Account':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                        default:
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                    elevation: 5,
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                }
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Notification' component={NotificationScreen} />
            <Tab.Screen name='MovieSchedule' component={MovieScheduleScreen} />
            <Tab.Screen name='News' component={NewsScreen} />
            <Tab.Screen name='Account' component={AccountScreen} />
        </Tab.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});