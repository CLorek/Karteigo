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

            <ScrollView style={styles.scrollView}>
                <ImageBackground source={image} style={styles.image}>
                    <View style = {styles.titles}>
                          <Text style = {styles.title}>{"Karteigo"}</Text>
                    </View>
                    
                    <View style = {styles.homeScreenButtonContainer}>
                    <View style = {{flexDirection: "row", marginBottom: 20}}>
                        <TouchableOpacity style={styles.homeScreenButton} onPress = {() => navigation.navigate('Create')}><Text style={styles.homeScreenButtonText}>Karte erstellen</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.homeScreenButton} onPress = {() => navigation.navigate('Query')}><Text style={styles.homeScreenButtonText}>Abfrage-Modus</Text></TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity  style={styles.homeScreenButton} onPress={() => navigation.navigate('ShowCards')} icon='eye'><Text style={styles.homeScreenButtonText}>Alle Karten</Text></TouchableOpacity>
                    </View>
                        
                    </View>

                    <View style = {styles.titles}>
                          <Text style = {styles.branch}>{"DEV"}</Text>
                    </View>

                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>


                   

                    <Text style={styles.testText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.</Text>
                </ImageBackground>
            </ScrollView>
            
        <KarteigoFAB/>

        </View>
    )
}

export default Home;