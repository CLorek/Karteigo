import React from 'react';
import {Text, View, ScrollView, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import styles from "../styles/main";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, FAB} from 'react-native-paper';
import image from '../assets/paper.png'
import KarteigoFAB from '../components/FAB';

const Home = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
                <ImageBackground source={image} style={styles.backgroundContainer}>

                    <View style={styles.headerContainer}>
                        <Text style = {styles.title}>{"Karteigo"}</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.homeScreenButton} onPress = {() => navigation.navigate('Create')}><Text style={styles.homeScreenButtonText}>Karte erstellen</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.homeScreenButton} onPress = {() => navigation.navigate('Query')}><Text style={styles.homeScreenButtonText}>Abfrage-Modus</Text></TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity  style={styles.homeScreenButton} onPress={() => navigation.navigate('ShowCards')} icon='eye'><Text style={styles.homeScreenButtonText}>Alle Karten</Text></TouchableOpacity>
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