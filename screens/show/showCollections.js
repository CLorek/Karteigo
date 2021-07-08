import React from 'react';
import {View, Button, ImageBackground, Text} from 'react-native';
import styles from "../../styles/main";
import image from '../../assets/paper.png';

const ShowCollections = () => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
           <View style={styles.headerContainer}></View>
           <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text> Show Collections </Text>
           </View>
          <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default ShowCollections;