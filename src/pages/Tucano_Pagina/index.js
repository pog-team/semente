import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Tucano.png'
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
<Text style={styles.TitleText}> 
    - Es...es...es...es...quilo! Ahh, um esquilo!", disse a noz  tremendo de pavor que saiu pulando rapidamente para se esconder na floresta.
    Cansada de fugir do esquilo, a pequena noz se encostou em uma árvore e disse:
    - Ai ai ai...Como eu queria ter asas para poder voar por cima das árvores e chegar naquele monte bem  rapidinho.

    Foi quando o policial tucano disse:- Ei, ei pequena noz, onde vai com tanta pressa? Precisa de ajuda?

</Text>
<TouchableOpacity><Text style={styles.ChoseText}> Proximo  </Text></TouchableOpacity>

            </View>


        </View>
    );
}


