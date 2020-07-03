//Importação de dependecias e afins
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


//Importando Estilo do App e Icones
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'

//Importando Emojis
import emojiHappy from '../../assets/img/Happy_Emoji.png'
import emojiNeutral from '../../assets/img/Neutral_Emoji.png'
import emojiSad from '../../assets/img/Sad_Emoji.png'


export default function Emocional() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textName}>Olá João</Text>
                <Text style={styles.textsubName}>Como você está  se sentindo hoje?</Text>

                <FontAwesome name="user-circle-o" size={71} color="#192742" style={styles.icon} />
            </View>


            

            <View style={styles.grid}>
                <Image source={emojiHappy} style={styles.icon2}></Image>
                <Image source={emojiNeutral} style={styles.icon3}></Image>
                <Image source={emojiSad} style={styles.icon4}></Image>
            </View>
            <TouchableOpacity style={styles.actionjump}>
            <Text style={styles.textJump}>Pular</Text>
        </TouchableOpacity>
           
        </View>


    )


}