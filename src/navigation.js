import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import EmocionalScreen from './pages/Emocional'
import HomeScreen from './pages/Home'
import  Bookcase from './pages/Bookcase'

const Tab = createBottomTabNavigator()


export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Bookcase" component={Bookcase}></Tab.Screen>
            <Tab.Screen name="Emocional" component={EmocionalScreen}></Tab.Screen>
        </Tab.Navigator>
    );
}