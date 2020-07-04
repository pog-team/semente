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
    sound: {
        height: 20,
        width: 20,
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

    book: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },

    action: {
        backgroundColor: '#192742',
        borderRadius: 8,
        height: 53,
        width: 203,
        justifyContent: 'center',
        textAlign: 'center',
        
      },

      actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
      },
      TitleText: {
          color: '#1B1C1E',
          fontWeight: "bold",
          fontSize:24,
          textAlign: "center",
          paddingTop: 25
      },

      FinaleText: {
        color: '#3C3F43',
        fontSize:24,
        textAlign: "center",
        fontWeight: "400",
        paddingTop: 2
      },

      TryText: {
        color: "#3C3F43",
        fontSize: 20,
        paddingTop: 5
      }




})
