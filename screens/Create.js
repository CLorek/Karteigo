import React from 'react';
import {View, Button, ImageBackground, Text} from 'react-native';
import styles from '../styles/main';
import image from '../assets/paper.png';
import KarteiButton from '../components/KarteiButton';


const Create = ({navigation}) => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.subTitle}>Was willst du erstellen?</Text>
            </View>
            <View style={styles.contentContainer} style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.buttonContainer}>
                    <KarteiButton text={"Neue Sammlung"} nav={"AddCollection"}/>
                    <KarteiButton text={"Neue Karte"} nav={"AddCard"}/>
                </View>
            </View>
            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default Create;