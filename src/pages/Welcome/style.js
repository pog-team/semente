import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 270,
        backgroundColor: '#FEFEFE'
      },

      textHero: {
        color: '#1D1D1D',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 50
      },

      action: {
        backgroundColor: '#192742',
        borderRadius: 8,
        height: 53,
        width: 203,
        justifyContent: 'center',
        textAlign: 'center',
        position: "absolute",
        top: 440,
        left: 90,
      },

      actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
      },

      logoHero: {
        position: "absolute",
        top: Constants.statusBarHeight + 200,
        left: 48,
      },

      TextLabel: {
         height: 40, 
         backgroundColor: '#F3F7F6',
         borderRadius: 2,
      },

      



})