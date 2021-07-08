import React from 'react';
import styles from "../../styles/main";
import {View} from 'react-native';
import {FAB, Button} from 'react-native-paper';
import Create from '../../screens/Create';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const KarteigoFAB = () => {
    const navigation = useNavigation(); 
    return(
    <View style={styles.fabcontainer}>
        <FAB style={styles.fab} onPress = {() => navigation.navigate('Create')} icon='plus'/>
    </View>

    )
}

export default KarteigoFAB;