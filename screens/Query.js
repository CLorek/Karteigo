import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from "../styles/main";
import image from '../assets/paper.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KarteiButton from '../components/KarteiButton';

const Query = () => {
    const getAllKeys = async () => {
        let keys = []
        try {
          keys = await AsyncStorage.getAllKeys()
        } catch(e) {
          // read key error
        }
      
        console.log(keys)
        // example console.log result:
        // ['@MyApp_user', '@MyApp_key']
      }
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}></View>
            <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
               <Text> Abfrage/Query Screen </Text>
               <View style={styles.buttonContainer}>
               <KarteiButton onPress={getAllKeys} text={"Neue Sammlung"} />
                </View>

            </View>
            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default Query;