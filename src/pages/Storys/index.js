import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';
import styles from './style'
import Hover from '../../assets/img/Hover_Book.png'
import Sound_Icon from '../../assets/img/soundOn.png'




async function playsound() {
    const playbackObject = await Audio.Sound.createAsync(
        { uri: 'https://srv-file10.gofile.io/download/XuJ5xo/Tucano.ogg' },
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


export default function Welcome() {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View style={styles.header}>
           
                <Text style={styles.headerTexts}>X</Text>
               
                <Text style={styles.headerTexts}>FIM</Text>
                <TouchableOpacity  onPress={() => playsound()}>
                <Image source={Sound_Icon} style={styles.sound}>
                </Image>
                </TouchableOpacity>   
            </View>
            <View style={styles.book}>
                

                <Text style={styles.TitleText}>Pobrezinha da Kaili!Clique no botão abaixo para mudar o seu destino</Text>

                <Text style={styles.FinaleText}>(1/2)</Text>

                <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Routes_Pause')}>
          <Text style={styles.actionText}>Tentar Novamente</Text>
        </TouchableOpacity>

            </View>


        </View>
    );
}


