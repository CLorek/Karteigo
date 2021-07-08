import React from 'react';
import {View, Button, Text, ImageBackground} from 'react-native';
import image from '../assets/paper.png';
import styles from "../styles/main";

const Details = () => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings Screen</Text>
            </View>
        </ImageBackground>
    )
}

export default Details;