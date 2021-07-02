import variables from './variables.js'
import { StyleSheet, YellowBox } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: 'grey',
        flex: 1
      },

      titles: {
        width: "100%",
        alignItems: "center"
      },

      title: {
        fontSize: variables.titleSize,
        fontWeight: 'bold',
      },

      subtitle: {
        fontSize: 16,
        color: "blue"
      },

      branch: {
        fontSize: 12,
        color: "black",
        alignItems: "center"
      },
      // image: {
      //   width: "100%",
      //   height: "100%",
      //   resizeMode: 'cover',
      //   position: "absolute"
      // },

      buttonsContainer: {
        display: 'flex',
        backgroundColor: "yellow",
        position: "absolute",
        top: "15%",
        width: "100%",
        flexDirection: 'column',

      },

      subButtons: {
        marginTop: 50,
        width: "50%",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'


      }

});




export default styles;