import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';
import styles from './style'
import hover_book from '../../assets/img/Capa.jpg'
import Sound_Icon from '../../assets/img/soundOn.png'
import { Col, Grid, Row } from 'react-native-easy-grid'



export default function Estante() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTexts}>Estante</Text>
            </View>
            <View style={styles.bookcase}>




                <View style={styles.book}>
                    <Image source={hover_book} style={styles.Image}></Image>
                    <View style={styles.txtWrap}>
                    <Text style={styles.titleBooks}>Kaili,a pequena sonhadora</Text>
                    <Text style={styles.authorBooks}>Equipe Semente</Text>
                    <Text style={styles.date}>Adicionado 05/07 as 01:34</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Routes_Pause')}>
                    <Text style={styles.buttom}>Continuar</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.book}>
                    <Image source={hover_book} style={styles.Image}></Image>
                    <View style={styles.txtWrap}>
                    <Text style={styles.titleBooks}>The tiny Dragon</Text>
                    <Text style={styles.authorBooks}>Gustavo Luan</Text>
                    <Text style={styles.date}>Adicionado 02/07 as 01:34</Text>
                    <Text style={styles.buttom}>Continuar</Text>
                    </View>
                </View>


                <View style={styles.book}>
                    <Image source={hover_book} style={styles.Image}></Image>
                    <View style={styles.txtWrap}>
                    <Text style={styles.titleBooks}>The tiny Dragon</Text>
                    <Text style={styles.authorBooks}>Gustavo Luan</Text>
                    <Text style={styles.date}>Adicionado 02/07 as 01:34</Text>
                    <Text style={styles.buttom}>Continuar</Text>
                    </View>
                </View>

                <View style={styles.book}>
                    <Image source={hover_book} style={styles.Image}></Image>
                    <View style={styles.txtWrap}>
                    <Text style={styles.titleBooks}>The tiny Dragon</Text>
                    <Text style={styles.authorBooks}>Gustavo Luan</Text>
                    <Text style={styles.date}>Adicionado 02/07 as 01:34</Text>
                    <Text style={styles.buttom}>Continuar</Text>
                    </View>
                </View>
            </View>
        </View>
    )




}