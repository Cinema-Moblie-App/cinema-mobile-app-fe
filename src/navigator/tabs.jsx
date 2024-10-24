import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/TabsScreen/HomeScreen'
import NotificationScreen from '../screens/TabsScreen/NotificationScreen'
import MovieScheduleScreen from '../screens/TabsScreen/AllScheduleFilmScreen'
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
                        case 'Trang chủ':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Lịch phim':
                            iconName = focused ? 'calendar' : 'calendar-outline';
                            break;
                        case 'Thông báo':
                            iconName = focused ? 'notifications' : 'notifications-outline';
                            break;
                        case 'Tin tức':
                            iconName = focused ? 'newspaper' : 'newspaper-outline';
                            break;
                        case 'Tài khoản':
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
                    backgroundColor: '#2F3251',
                    borderTopWidth: 1,          
                    borderTopColor: '#41467a',  
                    elevation: 5,              
                    shadowColor: '#000',        
                    shadowOffset: { width: 0, height: -3 },  
                    shadowOpacity: 0.3,        
                    shadowRadius: 4,           
                    height: 80,
                    paddingBottom: 30,
                    paddingTop: 5,
                }
            })}
        >
            <Tab.Screen name='Trang chủ' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Lịch phim' component={MovieScheduleScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Tin tức' component={NewsScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Thông báo' component={NotificationScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Tài khoản' component={AccountScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default TabsNavigator
