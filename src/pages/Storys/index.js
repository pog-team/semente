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
            <TouchableOpacity style={styles.action} onPress={() => playsound()}>
                <Text style={styles.headerTexts}>X</Text>
                </TouchableOpacity>   
                <Text style={styles.headerTexts}>FIM</Text>
                <Image source={Sound_Icon} style={styles.sound}>
                </Image>
            </View>
            <View style={styles.book}>
                <Image source={Hover} style={styles.hover}>
                </Image>

                <Text style={styles.TitleText}>Parabens você passou pela rota</Text>

                <Text style={styles.FinaleText}>(1/2)</Text>

                <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Storys')}>
          <Text style={styles.actionText}>Escolher Historia</Text>
        </TouchableOpacity>

        <Text style={styles.TryText}>Tentar de Novo</Text>
            </View>


        </View>
    );
}


