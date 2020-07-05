import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';
import styles from './style'
import hover_book from '../../assets/img/Hover_Book.png'
import Sound_Icon from '../../assets/img/soundOn.png'
import { Col, Grid, Row } from 'react-native-easy-grid'


export default function Estante() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTexts}>Categorias</Text>
                <Text style={styles.headerTexts}>Icone</Text>
            </View>
            <View style={styles.bookcase}>




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