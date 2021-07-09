import React, {useEffect, useState} from 'react';
import {FlatList, View, ImageBackground, Text, Alert} from 'react-native';
import styles from "../styles/main";
import image from '../assets/paper.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KarteiButton from '../components/KarteiButton';


const Query = () => {
  const [keys, setKeys] = useState([])

  useEffect(() => {
     AsyncStorage.getAllKeys()
      .then(setKeys)
      .catch(e => {})
  
  })

  return(
      <ImageBackground source={image} style={styles.backgroundContainer}>
          <View style={styles.headerContainer}></View>
          <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>

              <FlatList
                    data={keys}
                    renderItem={({item}) => (<Text>{item}</Text>)}
                    keyExtractor={(item, index) => index.toString()}
                />

              <View style={styles.buttonContainer}>
              {/* <KarteiButton onPress={getAllKeys} text={"Alle Karten anzeigen"} /> */}
              </View>

  
          </View>
          <View style={styles.footerContainer}></View>
      </ImageBackground>
  )
}

export default Query;