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
<<<<<<< HEAD
        placeholder= "Digite seu nome ">

        </TextInput>
        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Home')}>
=======
        placeholder="Digite seu nome"
        
        ></TextInput>
        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Storys')}>
>>>>>>> 128b7f914fdd5d40889d94dbe02f432923860337
          <Text style={styles.actionText}>Entrar</Text>
        </TouchableOpacity> 
    </View>
  );
}