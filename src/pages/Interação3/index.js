import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Historia.jpeg'
import Sound_Icon from '../../assets/img/soundOn.png'

import { Audio } from 'expo-av';



async function playsound() {
    const playbackObject = await Audio.Sound.createAsync(
        { uri: 'https://srv-file6.gofile.io/download/4qH91L/Intera%C3%A7%C3%A3o%201%20APOS%20IMG%20ESQUILO%20[%20IR%20A%20CASA%20DO%20ESQUILO%20%20%20OU%20%20%20%20FUGIR].mp3' },
        { shouldPlay: true },
      );
    
   
    
}





export default function Story_Routes() {
    const navigation = useNavigation()


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
                

                <Text style={styles.TitleText}>O que Kaili deve fazer?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Parte7')}><Text style={styles.ChoseText}>ACEITAR AJUDA</Text></TouchableOpacity>
                <Text style={styles.Text}>OU</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('')} ><Text style={styles.ChoseText}>RECUSAR A AJUDA</Text></TouchableOpacity>

            </View>


        </View>
    );
}


