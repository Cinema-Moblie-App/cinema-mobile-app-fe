import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from './type';
import LoginScreen from '../screens/LoginScreen';
import ResgiterScreen from '../screens/RegisterScreen';

export default function RootNavigator() {

    const MainStack = createStackNavigator();

    return (
        <MainStack.Navigator screenOptions={{headerShown:false, gestureEnabled:false  }} 
        initialRouteName={AppRoutes.REGISTER}>
            <MainStack.Screen name={AppRoutes.LOGIN} component={LoginScreen} />
            <MainStack.Screen name={AppRoutes.REGISTER} component={ResgiterScreen} />

            
        </MainStack.Navigator>
    );
}