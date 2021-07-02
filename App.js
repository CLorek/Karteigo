import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import MainScreen from './components/MainScreen';


export default function App() {
  return(



      <View style = {styles.container}>

        <MainScreen 
          name = {"Karteigo"}
          tagline = {"Die coole Lernapp von C und R die kein Menü hat"}
          image = {require("./assets/logo_ersteVersuche.png")}
          branch = {"Dev"}
        />

      </View>


  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    // alignItems: "center",
    // justifyContent: 'center',

  },

})