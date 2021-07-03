import React from 'react';
import {View, Button, Text} from 'react-native';

const Create = ({navigation}) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Create Screen</Text>
            <Button onPress = {() => navigation.navigate('AddCollection')} title='Add Collection'></Button>
            <Button onPress = {() => navigation.navigate('AddCard')} title='Add Card'></Button>
        </View>
    )
}

export default Create;