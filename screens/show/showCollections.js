import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from "../../styles/main";
import image from '../../assets/paper.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavButton from '../../components/NavButton';
import {Button} from 'react-native-paper';

const ShowCollections = () => {
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
                <Text> Show Collections </Text>
           </View>
           <View style={styles.buttonContainer}>
           <Button style={styles.homeScreenButton}  onPress={getAllKeys} mode="contained" >Alle Kartentitel ausgeben</Button>

                </View>
          <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default ShowCollections;