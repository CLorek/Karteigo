import React from 'react';
import {Text, View, ScrollView, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import styles from "../styles/main";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, FAB} from 'react-native-paper';
import image from '../assets/paper.png'
import KarteigoFAB from '../components/FAB';
import KarteiButton from '../components/KarteiButton';

const Home = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
                <ImageBackground source={image} style={styles.backgroundContainer}>

                    <View style={styles.headerContainer}>
                        <Text style = {styles.title}>{"Karteigo"}</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.buttonContainer}>
                            <KarteiButton text={'Erstelle Karten'} nav={'Create'}/>
                            <KarteiButton text={'Abfrage-Modus'} nav={'Query'}/>
                            </View>
                        <View style={styles.buttonContainer}>
                            <KarteiButton text={'Alle Karten'} nav={'ShowCards'}/>
                        </View>
                    </View>
                    <View style={styles.footerContainer}>
                    </View>

                </ImageBackground>
            <KarteigoFAB/>
        </View>
    )
}

export default Home;