import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Bau.png'
import Sound_Icon from '../../assets/img/soundOn.png'

import { Audio } from 'expo-av';





export default function Story_Pause() {
    const navigation = useNavigation()

    async function playsound() {
        const playbackObject = await Audio.Sound.createAsync(
            { uri: '' },
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
   Ao chegar na casa, a pequena noz avista um belo baú e pergunta:
- Senhor esquilo, o que tem ali dentro?Tem balas e pirulitos para mim?

- Se aproxime mais do baú minha pequena, vá ver o que tem lá dentro!Disse o esquilo.
     Kaili estava curiosa, se aproximou do baú  para  ver o que havia  dentro e percebeu que estava vazio. Neste momento o esquilo tenta pegar a pequena noz para guarda-la dentro do baú.
</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Interação2')} ><Text style={styles.ChoseText}> Proximo  </Text></TouchableOpacity>

            </View>


        </View>
    );
}


