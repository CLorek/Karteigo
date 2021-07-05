import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import styles from "../styles/main";
import StyledButton from "../components/StyledButton";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollView}>

                <View style = {styles.titles}>
                      <Text style = {styles.title}>{"Karteigo"}</Text>
                      <Text style = {styles.subtitle}>{"Die coole Lernapp von C und R die kein Menü hat"}</Text>
                </View>

                <View  style = {styles.tempButtonContainer}>
                                            <Button onPress = {() => navigation.navigate('Settings')} title='Setting Screen'></Button>
                                            <Button onPress = {() => navigation.navigate('Create')} title='Create Screen'></Button>
                                            <Button onPress = {() => navigation.navigate('Query')} title='Query Screen'></Button>
                                            <Button onPress = {() => navigation.navigate('Test')} title='DB Test Screen'></Button>
                                            <Button onPress = {() => navigation.navigate('ShowCards')} title='Show Cards'></Button>
                                            <Button onPress = {() => navigation.navigate('ShowCollections')} title='Show Collections'></Button>
                </View>

                <View style = {styles.titles}>
                      <Text style = {styles.branch}>{"Master"}</Text>
                </View>

                <Icon name='rocket' size={30} color='#900' />

                <Text style={styles.testText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.</Text>
            </ScrollView>
        </View>
    )
}

export default Home;