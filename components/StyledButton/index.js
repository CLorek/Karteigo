import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from '../StyledButton/styles';

const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    // ist dasselbe wie die Zeile darunter
    const { type, content, onPress } = props


    const backgroundColor = type === "primary" ? "black" : "green";
    const textColor = type === "primary" ? "green" : "black";

    return(
        <View style = {styles.container}>
            <Pressable
                style = {[styles.button, {backgroundColor: backgroundColor}]}
                onPress = {() => {
                    onPress();
                }}
            >
                <Text style = {[styles.text, {color: textColor}]}>
                    {content}
                </Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;