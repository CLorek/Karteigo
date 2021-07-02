import React from 'react';
import {Text, View} from 'react-native';
import styles from "../components/MainScreen/styles";
import StyledButton from "../components/StyledButton";

const Home = () => {
    return(
        <View style={styles.mainContainer}>

                    <View style = {styles.titles}>
                        <Text style = {styles.title}>{"Karteigo"}</Text>
                        <Text style = {styles.subtitle}>{"Die coole Lernapp von C und R die kein Menü hat"}</Text>
                    </View>

                    <View style = {styles.buttonsContainer}>
                        <StyledButton
                            type="primary"
                            content={"Content 1"}
                            width = {"100%"}
                            onPress={() =>{
                                console.warn("Content 1 hat noch keine weiterführere Funktion");
                            }}
                        />

                        <View style = {styles.subButtons}>
                            <StyledButton
                                type="secondary"
                                content={"Content 2"}

                                onPress={() =>{
                                    console.warn("Content 2 hat noch keine weiterführere Funktion");
                                }}
                            />
                            <StyledButton
                                type="third"
                                content={"Content 3"}
                                onPress={() =>{
                                    console.warn("Content 3 hat noch keine weiterführere Funktion");
                                }}
                            />
                        </View>
                    </View>

                    <View style = {styles.titles}>
                        <Text style = {styles.branch}>{"Master"}</Text>
                    </View>
                </View>
    )
}

export default Home;