import React from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
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

                    <View  style = {styles.tempButtonContainer}>
                        <Button onPress = {() => navigation.navigate('Settings')} mode="contained" icon='cog'>Setting Screen</Button>
                        <Button onPress = {() => navigation.navigate('Create')} mode="contained" icon='plus'>Create Screen</Button>
                        <Button onPress = {() => navigation.navigate('Query')}  mode="contained" icon='newspaper'>Query Screen</Button>
                        <Button onPress = {() => navigation.navigate('Test')}  mode="contained" icon='database'>DB Test Screen</Button>
                        <Button onPress = {() => navigation.navigate('ShowCards')} mode="contained" icon='eye'>Show Cards</Button>
                        <Button onPress = {() => navigation.navigate('ShowCollections')} mode="contained" icon='newspaper'>Show Collections</Button>
                    </View>

                    <View style = {styles.titles}>
                          <Text style = {styles.branch}>{"DEV"}</Text>
                    </View>

                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>

                    <Icon name='bars' size={30} color='#900' />

                   

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