import React from 'react';
import {Text, View, ImageBackground } from 'react-native';
import styles from "./styles";
import StyledButton from "../StyledButton";


const MainScreen = (props) => {
    const {name, tagline, image, branch} = props;

    return (
        <View style={styles.mainContainer}>

            {/* <ImageBackground
            // source = {require("../../assets/logo_ersteVersuche.png")}
            source = {image}
            style = {styles.image}
            /> */}

            <View style = {styles.titles}>
                <Text style = {styles.title}>{name}</Text>
                <Text style = {styles.subtitle}>{tagline}</Text>
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
                <Text style = {styles.branch}>{branch}</Text>
            </View>
        </View>
    );
};


export default MainScreen;
