import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Welcome from './pages/Welcome'
import Home from './pages/Home'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={ {headerShown: false} }>
                <AppStack.Screen name="Welcome" component={Welcome}></AppStack.Screen>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
