import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from "../../styles/main";


const NavButton = (props) => {
    let text = props.text;
    let onPress = props.onPress;
    return (
        <TouchableOpacity
            style={styles.homeScreenButton}
            onPress = {onPress}
        >
            <Text style={styles.homeScreenButtonText}>{text}</Text>
        </TouchableOpacity>
    )

}

export default NavButton;