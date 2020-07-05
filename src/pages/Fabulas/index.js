import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { Col,Grid } from 'react-native-easy-grid'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


import filter from '../../assets/img/filter.png'
import hover_book from '../../assets/img/Hover_Book.png'


export default function Fabulas() {
    const navigation = useNavigation()

    
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('categoria')}>
            <AntDesign name="arrowleft" size={20}></AntDesign>
        </TouchableOpacity>
            <Text style={styles.headerTexts}>Fabulas</Text>
            <Image source={filter} size={20} color="#192742" ></Image>
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

            <View style={styles.book1}>
                <Image source={hover_book} style={styles.Image}></Image>
                
            </View>

</Col>

</Grid>




            </View>


            </ScrollView>     
    )
}