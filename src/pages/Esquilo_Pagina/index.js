import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Capa.jpg'
import Sound_Icon from '../../assets/img/soundOn.png'

import { Audio } from 'expo-av';





export default function Story_Pause() {
    const navigation = useNavigation()

    async function playsound() {
        const playbackObject = await Audio.Sound.createAsync(
            { uri: 'https://srv-file8.gofile.io/download/3uODKY/Parte%201%20(NOZ%20NA%20ARVORE).mp3' },
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
                <Text style={styles.TitleText}>    Em uma bela manhã, uma pequena noz chamada Kaili dormia no alto de um carvalho. Seu 
sonho era se tornar o maior e mais belo carvalho de todos e para isso precisava estar no maior monte da floresta!


Kali se balançou de um lado para outro até cair no chão e assim poder iniciar sua jornada rumo ao monte.
</Text>
                <TouchableOpacity><Text style={styles.ChoseText}> Proximo  </Text></TouchableOpacity>

            </View>


        </View>
    );
}


