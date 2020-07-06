import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 34,
        backgroundColor: '#FEFEFE'
      },

      textName: {
          color: '#1D1D1D',
          fontSize: 24,
          fontWeight: "bold"
      },

      textsubName: {
        color: '#1D1D1D',
        fontSize: 24,
        width: 231
    },

    icon: {
        position: "absolute",
        left: 235,
        top: 16
    },

    icon2: {
        position: "absolute",
        top: 70,
        height: 100,
        width: 100
    },

    icon3: {
        position: "absolute",
        top: 70,
        right: 70,
        height: 100,
        width: 100
        
    },

    icon4: {
        position: "absolute",
        top: 190,
        left: 15,
        height: 100,
        width: 100
    },

    icon5: {
        position: "absolute",
        top: 190,
        left: 140,
        height: 100,
        width: 100  
    },

    textJump: {
        color: '#1B1C1E',
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },

    actionjump: {

        
        paddingTop: 10,
        position: "relative",
        top: 320
    }


      

     

})