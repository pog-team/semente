import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Castanha.png'
import Sound_Icon from '../../assets/img/soundOn.png'

import { Audio } from 'expo-av';




export default function Story_Pause() {
    const navigation = useNavigation()

    async function playsound() {
        const playbackObject = await Audio.Sound.createAsync(
            { uri: 'https://srv-file8.gofile.io/download/NMJxRe/KAILI%20PEDINDO%20AJUDA.mp3' },
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
                <Text style={styles.TitleText}>     Kaili pediu ajuda ao policial para chegar mais rápido no monte. Subiu nas costas do Tucano e juntos plainaram sobre as árvores até pousarem no monte. 
- Agora eu só preciso ficar aqui bem quietinha. Me alimentar da água da chuva e da luz do sol.
E foi exatamente isso que a pequena Kaili fez. Ficou ali bem quietinha se alimentando todos os dias!    O tempo foi passando e Kaili foi crescendo, crescendo e ficando cada vez mais forte!


</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Routes_Story')} ><Text style={styles.ChoseText}> Proximo  </Text></TouchableOpacity>

            </View>


        </View>
    );
}


