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

      homeScreenButtonContainer:{
        margin: 20,
        display: 'flex',
        flexWrap: 'nowrap',

        paddingVertical: 10,
        paddingHorizontal: 12
      },

      homeScreenButton:{
        height: 150,
        justifyContent: 'center',
        margin: 5,
        alignItems: "center",
        backgroundColor: "#80ba24",
        padding: 10,
        elevation: 8,
        borderRadius: 10,
      },

      homeScreenButtonText:{
        fontSize: 18,
        color: "white",
        fontWeight: "900",
        textTransform: "uppercase"
      },

      fabcontainer: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
      fab: {
        backgroundColor: "#80ba24",
        color: "white"
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