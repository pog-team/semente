import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions,} from 'react-native';
import logo from '../../assets/img/logo.png';

import { render } from 'react-dom';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';


const data = [
  { id: '00001', title: 'Book 01' }, 
  { id: '00002', title: 'Book 02' }, 
  { id: '00003', title: 'Book 03' },
  { id: '00004', title: 'Book 04' }, 
  { id: '00005', title: 'Book 05' }, 
  { id: '00006', title: 'Book 06' }
];

const formatData = (data, numColumns) => {
const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);

   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ title: `blank-${numberOfElementsLastRow}`, empty: true });
     numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }

  return data;
};


const numColumns = 3;

  export default function Home() {
  renderItem = ({ item, index }) => {
      if (item.empty === true) {
        return
         <View style={[styles.item, styles.itemInvisable]} />;
      
      };

  return (
    <View style={styles.container}>
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
</View>
  );
};

   return (
    <SafeAreaView style={styles.contain}>
      <Image style={styles.logo} source={logo}/>

      <TextInput
      style={styles.SearchBar}>
        <Text>Pesquisar pelo titulo, autor, categoria 
        </Text>
      </TextInput>
    <View style={styles.box}>
      <Text>
        Plantando certezas para o futuro Interaja com 
        os livros para descobrir novas  aventuras e soltar sua 
        imaginação
      </Text>
    </View>
      <Text style={{fontSize: 18, left: 5,fontWeight: 'bold', paddingBottom: 5,}}>
      Indicando para você
      </Text>

    <FlatList 
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={this.renderItem}
      numColumns={numColumns}
    />
    </SafeAreaView>
    );
  }

  // All the Style  

const styles = StyleSheet.create({
  contain:{
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#fff',
    
  },
  container:{
    flex: 1,
    marginVertical: 0,
    backgroundColor: '#fff'
  },

  item: {
    backgroundColor: '#aee',
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns,
  },
  itemInvisable: {
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: '#fff',
    color: '#fff',
  },
  logo: {
  alignItems: 'center',
  margin: 45,

  },
  SearchBar: {
    height: 40, 
    width: 345,
    borderColor: 'gray', 
    borderWidth: 1, 
    marginTop: 0, 
    marginBottom: 0, 
    margin: 35,
    alignItems:'center',
    
  },
  box: {
    backgroundColor: '#aec',
    color:'#eee333',
    width: 345,
    height: 150,
    margin: 35,
    padding: 15,
    borderRadius: 10,
  }
});
