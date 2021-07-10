import React, {useEffect, useState} from 'react';
import {FlatList, View, ImageBackground, Text, Alert} from 'react-native';
import styles from "../styles/main";
import image from '../assets/paper.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KarteiButton from '../components/KarteiButton';
import {Button, FAB} from 'react-native-paper';


const Query = () => {
  const [keys, setKeys] = useState([])

  useEffect(() => {
     AsyncStorage.getAllKeys()
      .then(setKeys)
      .catch(e => {})
  
  })


  async function callData({item})  {
    try {
        const jsonValue =  await AsyncStorage.getItem(item);
        const parsed = JSON.parse(jsonValue);
        // alert("Thema: "+ parsed.stack+", Titel: "+parsed.title+", Frage: "+parsed.question+", Antwort: "+parsed.answer+" ");
        Alert.alert(
            parsed.stack+": "+parsed.title,
            parsed.question,
            [
                {
                  text: "Antwort",
                  onPress: () => {
                    Alert.alert(
                        "richtige Antwort:",
                        parsed.answer);
                  },
                },
              ]
            )


    } catch(e) {
        Alert.alert(
            "Fehler",
            "Karte "+item+ " nicht vorhanden!")
    }

}

// Testfunktion
async function call({item}) {
    console.log("neu")
    console.log("dies ist das item "+item)
    let v = {item};
    let s = JSON.stringify(v);
    let a = s.toString();
    console.log(v)
    console.log(s)
    console.log(a)
    console.log(item)
    console.log("---------------------")
}



  return(
      <ImageBackground source={image} style={styles.backgroundContainer}>
          <View style={styles.headerContainer}></View>
          <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>



              <View style={styles.buttonContainer}>
              <FlatList
                    data={keys}
                    renderItem={({item}) => ( <KarteiButton onPress={() =>callData({item})} text={item}/>   )}
                    keyExtractor={(item, index) => index.toString()}
                />
              </View>

  
          </View>
          <View style={styles.footerContainer}></View>
      </ImageBackground>
  )
}

export default Query;