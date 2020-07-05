import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import Hover from '../../assets/img/Hover_Book.png'
import Sound_Icon from '../../assets/img/soundOn.png'





export default function Story_Pause() {
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
                <Image source={Hover} style={styles.hover}>
                </Image>

                <Text style={styles.TitleText}>Em uma bela manhã de março,  uma pequena noz  dormia no no alto de um carvalho. Kali sonhava em um dia se tornar o mais majestoso carvalho branco de todos os tempos, muito forte e muito alto, mas para isso, Kali precisaria chegar ao topo do monte, que ficava do outro lado da floresta.Kali se balançou de um lado para outro até cair no chão e assim poder começar sua jornada rumo ao monte!</Text>
                <TouchableOpacity><Text style={styles.ChoseText}>Voltar</Text></TouchableOpacity>
                <Text style={styles.Text}>OU</Text>
                <TouchableOpacity><Text style={styles.ChoseText}>Proximo</Text></TouchableOpacity>

            </View>


        </View>
    );
}


