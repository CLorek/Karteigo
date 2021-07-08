import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from "../styles/main";
import image from '../assets/paper.png';


const Query = () => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}></View>
            <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
               <Text> Abfrage/Query Screen </Text>
            </View>
            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default Query;