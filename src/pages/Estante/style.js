import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { color } from 'react-native-reanimated'
import { Grid } from 'react-native-easy-grid'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 35,
        backgroundColor: '#FEFEFE',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: "#DEDADA",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 4,
    },

    headerTexts: {
        fontSize: 20,
        fontWeight: "bold"
    },

    bookcase: {
    
    },

    book: {
  
    },

    txtWrap: {
      position: "relative",
      color: '#fff',
      bottom: 180,
      left: 155,
      borderRadius: 20,
    },

    Image: {
      height: 185,
      width: 145,
      position: "relative",
      right: 15,

    },

   titleBooks: {
    fontWeight: 'bold',
    fontSize: 18,
   },
   authorBooks: {
    fontSize: 16,
   },

   date: {
    fontSize: 12,
    color: '#aa9',
   },

   buttom: {
    width: 150,
    height: 50,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#192742',
    color: '#fff',
    alignItems: 'center',
   textAlign: "center",
   justifyContent: "center",
   padding: 10
  
   },

      TitleText: {
          color: '#1B1C1E',
          fontWeight: "bold",
          fontSize:18,
          textAlign: "center",
          paddingTop: 10
      },

      ChoseText: {
        color: '#3C3F43',
        fontSize:24,
        textAlign: "center",
        paddingTop: 5,
        paddingTop: 20,
        borderBottomColor: "#292626",
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 4,
      },

      Text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10

      },

      contentContainer: {
        marginLeft: 10,
      },



})
