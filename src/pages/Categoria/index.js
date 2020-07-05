import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import  {NavigationContainer } from '@react-navigation/native'
import styles from './style';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { FontAwesome } from '@expo/vector-icons'


import Navigation from '../../navigation'

import hover_book from '../../assets/img/Hover_Book.png'


export default function Bookcase() {
    return (
    
        <View style={styles.container}>
            <Navigation></Navigation>
        <View style={styles.header}>
            <Text style={styles.headerTexts}>Categorias</Text>
            <FontAwesome name="search" size={20} color="#192742" style={styles.icon} />
        </View>
        <View style={styles.bookcase}>

           
            <Grid>
<Col>
<View style={styles.book}>
                <Image source={hover_book} style={styles.Image}></Image>
                
            </View>

            <View style={styles.book1}>
                <Image source={hover_book} style={styles.Image}></Image>
                
            </View>

</Col>
<Col>
<View style={styles.book}>
                <Image source={hover_book} style={styles.Image}></Image>
                
            </View>

            <View style={styles.book1}>
                <Image source={hover_book} style={styles.Image}></Image>
                
            </View>

</Col>

</Grid>




            </View>

            
        </View>
       
    )
}