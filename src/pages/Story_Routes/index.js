import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Historia.jpeg'
import Sound_Icon from '../../assets/img/soundOn.png'





export default function Story_Routes() {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTexts}>X</Text>
                <Text style={styles.headerTexts}></Text>
                <Image source={Sound_Icon} style={styles.sound}>
                </Image>
            </View>
            <View style={styles.book}>
                

                <Text style={styles.TitleText}>Você decide:</Text>
                <TouchableOpacity><Text style={styles.ChoseText}>Escolha 1</Text></TouchableOpacity>
                <Text style={styles.Text}>OU</Text>
                <TouchableOpacity><Text style={styles.ChoseText}>Escolha 2</Text></TouchableOpacity>

            </View>


        </View>
    );
}


