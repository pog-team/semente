import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {logo} from '../../assets/img/logo.png';

export default function Home() {
  
  return (
    <View>
    <Image
    style={styles.logo}
    source={logo}
  />
    <TextInput style={styles.box}> 
    <Text>Pesquisar pelo Titulo, Autor, Categoria </Text>
    </TextInput>

    

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#443344',
    
  },
  box: {
    backgroundColor: '#fff',
    color: '#888',
    height: 50,
    width: 350,
    fontSize: 18,
    borderColor: '#ddd', 
    borderWidth: 1,
    textAlign: 'center',
    margin: 50,
    borderRadius: 2,
  },
  logo: {
   
  }
});

