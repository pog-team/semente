//Importação de dependecias e afins
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


//Importando Estilo do App e Icones
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'

//Importando Emojis
import emojiHappy from '../../assets/img/Happy_Emoji.jpg'
import emojiNeutral from '../../assets/img/Neutral_Emoji.jpg'
import emojiSad from '../../assets/img/Sad_Emoji.jpg'
import emojiHungry from '../../assets/img/Hungry_Emoji.jpg'




export default function Emocional() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textName}>Olá João</Text>
                <Text style={styles.textsubName}>Como você está  se sentindo hoje?</Text>

                <FontAwesome name="user-circle-o" size={71} color="#192742" style={styles.icon} />
            </View>

            <View style={styles.grid}>
            <TouchableOpacity onPress={() => navigation.navigate('Story_Pause')}>
                <Image source={emojiHappy} style={styles.icon2} />
                </TouchableOpacity>
                <Image source={emojiNeutral} style={styles.icon3}></Image>
                <Image source={emojiSad} style={styles.icon4}></Image>
                <Image source={emojiHungry} style={styles.icon5}></Image>
            </View>
            <TouchableOpacity style={styles.actionjump} onPress={() => navigation.navigate('Estante')}>
            <Text style={styles.textJump}>Pular</Text>
        </TouchableOpacity>
           
        </View>


    )


}