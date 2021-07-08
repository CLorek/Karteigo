import React from 'react';
import {View, Button, Text, ImageBackground} from 'react-native';
import image from '../assets/paper.png';
import styles from "../styles/main";

const Details = () => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}></View>
                <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
                   <Text> Settings </Text>
                </View>
            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default Details;