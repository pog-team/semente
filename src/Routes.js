import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Emocional from './pages/Emocional'

import Storys from './pages/Storys'
import Routes_Story from './pages/Story_Routes'
import Routes_Pause from './pages/Story_Pause'

import Fabulas from './pages/Fabulas'
import Estante from './pages/Estante'


//Historia

import Parte2 from './pages/Esquilo_Pagina'
import Parte3 from './pages/Parte3'
import Interação2 from './pages/Interação2'
import Interação3 from './pages/Interação3'
import Parte4 from './pages/Parte4'
import Parte6 from './pages/Parte6'
import Parte7 from './pages/Parte7'
import Tucano from './pages/Tucano_Pagina'

export default function Routes() {
    
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Welcome" component={Welcome}></AppStack.Screen>
                <AppStack.Screen name="Fabulas" component={Fabulas}></AppStack.Screen>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
               
                <AppStack.Screen name="Emocional" component={Emocional}></AppStack.Screen>
                <AppStack.Screen name="Storys" component={Storys}></AppStack.Screen>
                <AppStack.Screen name="Routes_Story" component={Routes_Story}></AppStack.Screen>
                <AppStack.Screen name="Routes_Pause" component={Routes_Pause}></AppStack.Screen>

                <AppStack.Screen name="Estante" component={Estante}></AppStack.Screen>
                <AppStack.Screen name="Parte2" component={Parte2}></AppStack.Screen>
                <AppStack.Screen name="Parte3" component={Parte3}></AppStack.Screen>
                <AppStack.Screen name="Interação2" component={Interação2}></AppStack.Screen>
                <AppStack.Screen name="Interação3" component={Interação3}></AppStack.Screen>
                <AppStack.Screen name="Parte4" component={Parte4}></AppStack.Screen>
                <AppStack.Screen name="Parte6" component={Parte4}></AppStack.Screen>
                <AppStack.Screen name="Tucano" component={Tucano}></AppStack.Screen>
                <AppStack.Screen name="Parte7" component={Parte7}></AppStack.Screen>

            </AppStack.Navigator>
        </NavigationContainer>
    )
}
