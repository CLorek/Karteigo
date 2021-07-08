import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from "../../styles/main";
import { useNavigation } from '@react-navigation/native';

const karteiButton = (props) => {
    const navigation = useNavigation();
    let text = props.text;
    let nav = props.nav;
    return (
        <TouchableOpacity
            style={styles.homeScreenButton}
            onPress = {() => navigation.navigate(nav)}
        >
            <Text style={styles.homeScreenButtonText}>{text}</Text>
        </TouchableOpacity>
    )

}

export default karteiButton;