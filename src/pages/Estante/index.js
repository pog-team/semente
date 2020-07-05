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
                    <Text style={styles.titleBooks}>The tiny Dragon</Text>
                    <Text style={styles.authorBooks}>The tiny Dragon</Text>
                    <Text style={styles.date}>Adicionado 02/07 as 01:34</Text>
                </View>

                <View style={styles.book1}>
                    <Image source={hover_book} style={styles.Image}></Image>
                    <Text style={styles.titleBooks}>The tiny Dragon</Text>
                    <Text style={styles.authorBooks}>The tiny Dragon</Text>
                    <Text style={styles.date}>Adicionado 02/07 as 01:34</Text>
                </View>


                <View style={styles.book}>
                    <Image source={hover_book} style={styles.Image}></Image>
                    <Text style={styles.titleBooks}>The tiny Dragon</Text>
                    <Text style={styles.authorBooks}>The tiny Dragon</Text>
                    <Text style={styles.date}>Adicionado 02/07 as 01:34</Text>
                </View>

                <View style={styles.book1}>
                    <Image source={hover_book} style={styles.Image}></Image>
                    <Text style={styles.titleBooks}>The tiny Dragon</Text>
                    <Text style={styles.authorBooks}>The tiny Dragon</Text>
                    <Text style={styles.date}>Adicionado 02/07 as 01:34</Text>
                </View>





            </View>
        </View>
    )




}