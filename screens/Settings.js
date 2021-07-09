import React from 'react';
import {View, Button, Text, ImageBackground,Alert} from 'react-native';
import image from '../assets/paper.png';
import styles from "../styles/main";
import KarteiButton from '../components/KarteiButton'


import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
    const clearAsyncStorage = async() => {
        Alert.alert(
            "Sind Sie sicher?",
            "Alle Karteikarten werden gelöscht",
            [
              {
                text: "Ja",
                onPress: () => {
                  AsyncStorage.clear();
                },
              },
              {
                text: "Nein",
              },
            ]
          );
    }


    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}></View>
                <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
                   <View style={styles.buttonContainer}>
                    <KarteiButton text={"Alle Karten löschen"} onPress={clearAsyncStorage}/>

                </View>
                </View>
            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default Settings;