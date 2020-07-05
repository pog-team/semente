import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { ScrollView } from 'react-native-gesture-handler';

import hover_book from '../../assets/img/Hover_Book.png'

export default function Bookcase() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTexts}>Categorias</Text>
                <Text style={styles.headerTexts}>Icone</Text>
            </View>
            <View style={styles.bookcase}>

               
                <Grid>
    <Col>
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
    
    </Col>
    <Col>
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
    
    </Col>

</Grid>




                </View>
            </View>
    )
}