import variables from './variables.js'
import { StyleSheet, YellowBox } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: variables.secondaryColor,
//        borderWidth: 5,
      },

      backgroundContainer:{
        height: "100%"
      },

      headerContainer:{
        width: "100%",
        flexGrow: 1,
//        borderWidth: 5,
//        borderColor: 'red'
      },

      contentContainer:{
        width: "100%",
        flexGrow: 8,
//        borderWidth: 5,
//        borderColor: 'green'
      },

      footerContainer:{
        width: "100%",
        flexGrow: 1,
//        borderWidth: 5,
//        borderColor: 'blue'
      },

      title: {
        alignSelf: 'center',
        fontSize: variables.titleSize,
        fontWeight: 'bold',
      },

      subTitle:{
        alignSelf: 'center',
        fontSize: variables.subTitle,
        paddingTop: 75
      },

      logo:{
        alignSelf: 'center',
        height: 150,
        width: 150,
        marginTop: 10,
        paddingBottom: 10
      },

      buttonContainer:{
        flexDirection: 'row',
      },

      homeScreenButton:{
        height: 150,
        flexGrow: 1,
        justifyContent: 'center',
        margin: 5,
        alignItems: "center",
        backgroundColor: variables.primaryColor,
        padding: 10,
        elevation: 8,
        borderRadius: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2
      },

      homeScreenButtonText:{
        fontSize: 18,
        color: "white",
        fontWeight: "900",
        textTransform: "uppercase",
        fontWeight: 'bold'
      },

      fabcontainer: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
      fab: {
        backgroundColor: "#80ba24",
        color: 'white',
        borderRadius: 100,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2
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
    },
    card: {
        flex: 1,
        alignItems: 'center',
    },

    cardContainer: {
    },

    cardImage: {
         height: 175,
         width: 300
    },

    cardText:{
        position: 'absolute',
    },
    inputSmall: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor: "white"
    },
    inputMedium: {
      height: 60,
      margin: 12,
      borderWidth: 1,
      backgroundColor: "white"
    },
    inputLarge: {
      height: 120,
      margin: 12,
      borderWidth: 1,
      backgroundColor: "white"
    },
    dropdownsRow: { flexDirection:'row', margin: 12 },

    dropdown1BtnStyle: { flex: 1, height: 40, backgroundColor: "#FFF", borderWidth: 1, borderColor: "black" },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },


    cardListButton: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },

    titleListElement:{
        fontWeight: 'bold',
        fontSize: 20
    },

    subTitleListElement:{
        fontSize: 15
    },

    listIcon:{
        fontSize: 20,
        alignSelf: 'flex-end'
    }

});




export default styles;