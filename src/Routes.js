import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Welcome from './pages/Welcome'
import Home from './pages/Estante'
import Emocional from './pages/Emocional'

import Storys from './pages/Storys'
import Routes_Story from './pages/Story_Routes'
import Routes_Pause from './pages/Story_Pause'


import Bookcases from './pages/Categoria'
import Fabulas from './pages/Fabulas'
import Estante from './pages/Estante'



export default function Routes() {
    
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Welcome" component={Welcome}></AppStack.Screen>
                <AppStack.Screen name="Fabulas" component={Fabulas}></AppStack.Screen>
                <AppStack.Screen name="categoria" component={Bookcases}></AppStack.Screen>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
               
                <AppStack.Screen name="Emocional" component={Emocional}></AppStack.Screen>
                <AppStack.Screen name="Storys" component={Storys}></AppStack.Screen>
                <AppStack.Screen name="Routes_Story" component={Routes_Story}></AppStack.Screen>
                <AppStack.Screen name="Routes_Pause" component={Routes_Pause}></AppStack.Screen>

                <AppStack.Screen name="Estante" component={Estante}></AppStack.Screen>

            </AppStack.Navigator>
        </NavigationContainer>
    )
}
