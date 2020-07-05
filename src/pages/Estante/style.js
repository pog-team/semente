import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 34,
        backgroundColor: '#FEFEFE'
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
      paddingTop: 15
    },



    book1: {
      paddingTop: 20
    
    },

    

    Image: {
      height: 185,
      width: 145
    },

   
      TitleText: {
          color: '#1B1C1E',
          fontWeight: "bold",
          fontSize:20,
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
