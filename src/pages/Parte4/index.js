import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/bau1.png'
import Sound_Icon from '../../assets/img/soundOn.png'

import { Audio } from 'expo-av';





export default function Story_Pause() {
    const navigation = useNavigation()

    async function playsound() {
        const playbackObject = await Audio.Sound.createAsync(
            { uri: 'https://srv-file8.gofile.io/download/j4f2aR/parte%204%20[NOZ%20CHORANDO].mp3' },
            { shouldPlay: true },
          );
        
        
        // try {
        //     const { sound: soundObject, status } = await Audio.Sound.createAsync(
        //       require(''),
        //       { shouldPlay: true }
        //     );
        //     // Your sound is playing!
        //   } catch (error) {
        //     console.log(error)
        //   }
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTexts}>X</Text>
                <Text style={styles.headerTexts}></Text>
                 <TouchableOpacity  onPress={() => playsound()}>
                <Image source={Sound_Icon} style={styles.sound}>
                </Image>
                </TouchableOpacity>   
            </View>
            <View style={styles.book}>
                <Image source={Hover} style={styles.hover}>
                </Image>
                <Text style={styles.TitleText}>
 
                Kaili começa a chorar e fica parada sem sair do lugar. O esquilo malvado pega a pequena noz e a tranca dentro de um baú frio e escuro e diz:
- Ha, há! Como foi fácil enganar essa pequenina! Ela vai ser o meu jantar! 


</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Storys')} ><Text style={styles.ChoseText}> Proximo  </Text></TouchableOpacity>

            </View>


        </View>
    );
}


