import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style'
import logoHero from '../../assets/img/logo.png'



export default function Welcome() {
  const navigation = useNavigation()


  return (
   
   
   <View style={styles.container}>
     
      <Image
        style={styles.logoHero}
        source={logoHero}
      />

     
        <Text style={styles.textHero}>Qual seu nome?</Text>
        <TextInput 
        style={styles.TextLabel}
leOpacity style={styles.action} onPress={() => navigation.navigate('categoria')}>





        placeholder= "Digite seu nome ">

        </TextInput>
        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.actionText}>Entrar</Text>
        </TouchableOpacity> 
    </View>
  );
}