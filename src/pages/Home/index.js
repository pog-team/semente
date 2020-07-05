import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions,} from 'react-native';
import logo from '../../assets/img/logo.png';
import cover from '../../assets/img/Hover_Book.png';
import { render } from 'react-dom';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';



const data = [
  { id: '00001', title: <Image style={{width:130, height:130,}} source={cover}/> }, 
  { id: '00002', title: <Image style={{width:130, height:130,}} source={cover}/> }, 
  { id: '00003', title: <Image style={{width:130, height:130,}} source={cover}/> },
  { id: '00004', title: <Image style={{width:130, height:130,}} source={cover}/> }, 
  { id: '00005', title: <Image style={{width:130, height:130,}} source={cover}/> }, 
  { id: '00006', title: <Image style={{width:130, height:130,}} source={cover}/> },
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
      style={styles.SearchBar}
      placeholder= "Pesquisar pelo titulo, autor, categoria">
       
      </TextInput>
    <View style={styles.box}>
      <Text style={{ fontSize: 18, textAlign: 'left'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, }}>Plantando certezas para o futuro </Text>
         Interaja com os livros para descobrir novas  aventuras e soltar sua 
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
    backgroundColor: '#fff'
  },

  item: {
    
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
    margin: 2,
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

