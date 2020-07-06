import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Esquilo.png'
import Sound_Icon from '../../assets/img/soundOn.png'

import { Audio } from 'expo-av';





export default function Story_Pause() {
    const navigation = useNavigation()

    async function playsound() {
        const playbackObject = await Audio.Sound.createAsync(
            { uri: 'https://srv-file8.gofile.io/download/ww5Rc4/Parte%202%20(ESQUILO%20NA%20ARVORE).mp3' },
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
                <Text style={styles.TitleText}>    Não muito distante dali, estava a espreita um esquilo que vigiava Kaili. O roedor pulou de galho em galho e foi se aproximando cada vez mais da pequena noz e disse:


                - Então temos uma nova sementinha sonhando em ser um grande carvalho? Venha comigo, pequena!Tenho um baú cheio de coisas gostosas em minha casa!"

</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Routes_Story')} ><Text style={styles.ChoseText}> Proximo  </Text></TouchableOpacity>

            </View>


        </View>
    );
}


