import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import logo from '../../assets/img/logo.png';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default function Home() {
  
  return (
    <View >
    <Image
    style={styles.logo}
    source={logo}
  />
    <TextInput style={styles.box}> 
    <Text>Pesquisar pelo titulo, autor, categoria </Text>
    </TextInput>
    <Text style={styles.txtBox}>
      Plantando certezas para o futuro
      Interaja com os livros para descobrir
      novas aventuras e soltar sua imaginação 
      </Text>
      <Text>Indicando para você </Text>

  <View style={styles.wrap}>

      <Text style={styles.book1}>Book 01</Text>
      <Text style={styles.book2}>Book 02</Text>
      <Text style={styles.book3}>Book 03</Text>
      <Text style={styles.book4}>Book 04</Text>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#443344',
    borderBottomColor: '#daaadd',
    borderBottomWidth: 2,
  },
  wrap: {
    margin: 5,
    top: 30,
  },
  box: {
    backgroundColor: '#fff',
    color: '#888',
    height: 50,
    width: 370,
    fontSize: 18,
    borderColor: '#ddd', 
    borderWidth: 1,
    textAlign: 'center',
    margin: 20,
    borderRadius: 2,
  },
 txtBox: {
   width: 370,
   height:138,
   fontSize: 14,
   backgroundColor: '#aaaaaa',
   borderRadius: 8,
   padding: 40,
   margin: 20,
 },
 book1: {
  backgroundColor: '#8af',
  color: '#888',
  height: 220,
  width: 180,
  fontSize: 18,
  borderColor: '#ddd', 
  borderWidth: 1,
  textAlign: 'center',
  borderRadius: 2, 
  position: "relative",
  marginLeft: 18,
  bottom:28,
  display: 'flex',
  flexDirection: "row",
  color: '#000',
 },
 book2: {
  backgroundColor: '#e5f',
  color: '#888',
  height: 220,
  width: 180,
  fontSize: 18,
  borderColor: '#ddd', 
  borderWidth: 1,
  textAlign: 'center',
  borderRadius: 2, 
  position: "relative",
  left: 203,
  bottom:248,
  display: "flex",
  flexDirection: "row",
  color: '#000',
 },
 book3: {
  backgroundColor: '#fa1',
  color: '#888',
  height: 220,
  width: 180,
  fontSize: 18,
  borderColor: '#ddd', 
  borderWidth: 1,
  textAlign: 'center',
  marginTop:125,
  marginLeft:18,
  borderRadius: 2, 
  position: "relative",
  bottom:367,
  display: "flex",
  flexDirection: "row",
  color: '#000',
 },
 book4: {
  backgroundColor: '#ff4',
  color: '#888',
  height: 220,
  width: 180,
  fontSize: 18,
  borderColor: '#ddd', 
  borderWidth: 1,
  textAlign: 'center',
  borderRadius: 2, 
  position: "relative",
  marginLeft:203,
  bottom:587,
  display: "flex",
  flexDirection: "row",
  color: '#000',
 },
});

