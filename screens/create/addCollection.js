import React from 'react';
import {View, Button, Text, ImageBackground} from 'react-native';
import styles from "../../styles/main";
import image from '../../assets/paper.png';

const Collection = () => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}></View>
            <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
               <Text> Add Collections </Text>
            </View>
            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default Collection;