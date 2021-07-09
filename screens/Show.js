import React from 'react';
import {View, Button, ImageBackground, Text} from 'react-native';
import styles from '../styles/main';
import image from '../assets/paper.png';
import NavButton from '../components/NavButton';


const Show = ({navigation}) => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.subTitle}>Was willst du erstellen?</Text>
            </View>
            <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.buttonContainer}>
                    <NavButton text={"Alle Sammlungen"} nav={"ShowCollections"}/>
                    <NavButton text={"Alle Karten"} nav={"ShowCards"}/>
                </View>
            </View>
            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default Show;