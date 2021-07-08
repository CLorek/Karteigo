import variables from './variables.js'
import { StyleSheet, YellowBox } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: 'grey',
        flex: 1
      },

      image:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        // background_repeat: "repeat"
      },

      scrollView: {
        backgroundColor: 'pink'
      },

      testText:{
        fontSize: 25,
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


      },

      tempButtonContainer:{
        display: 'flex',
        flexWrap: 'nowrap',
      },

      fabcontainer: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
      fab: {
        backgroundColor: "white",
        color: "black"
      },
      text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },
    input: {
        padding: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        margin: 10
    },
    button: {
        margin: 15,
        padding: 10,
        backgroundColor: 'yellow',
    },
    buttonText: {
        fontSize: 18,
        color: '#444'
    }

});




export default styles;