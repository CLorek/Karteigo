import React from 'react';
import {Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import styles from "../styles/main";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, FAB} from 'react-native-paper';
import image from '../assets/paper.png';
import logo from '../assets/logo.png';
import KarteiFab from '../components/KarteiFab';
import NavButton from '../components/NavButton';

const Home = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
                <ImageBackground source={image} style={styles.backgroundContainer}>

                    <View style={styles.headerContainer}>
                        <Image style={styles.logo} source={logo} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.buttonContainer}>
                            <NavButton text={'Erstelle Karten'} nav={'Create'}/>
                            <NavButton text={'Abfrage-Modus'} nav={'Query'}/>
                            </View>
                        <View style={styles.buttonContainer}>
                            <NavButton text={'Alle Karten'} nav={'ShowCards'}/>
                        </View>
                    </View>
                    <View style={styles.footerContainer}></View>

                </ImageBackground>
            <KarteiFab/>
        </View>
    )
}

export default Home;