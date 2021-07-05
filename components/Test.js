import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity
  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const Test = () => {
    let key;
    let value;
    // let karte = {  
    //     name: 'romisches imperium',  
    //     content: 'das romische imperium war gut und groß und vor langer langer zeit',  
    //   }  
    async function setData() {
        try {
            await AsyncStorage.setItem(key, value);
            // alert("gepseichert");
        } catch (e) {
            alert("fehler");
        }
    }
    
    async function getData() {
        try {
            let card = await AsyncStorage.getItem('key');
            
            // alert("laden erfolgreich");
            // alert(parsed.name);
        } catch (e) {
            alert("laden fehler");
        }
    }


    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>TestScreen</Text>
            <Text>Hier hier getestet</Text>
            <TextInput
                style={styles.input}
                value={key}  
                placeholder="Kartenname"
            />
            <TextInput
                style={styles.input}
                value={value}
                placeholder="Karteninhalt"
                //   onChangeText={onChangeText}
                //   onSubmitEditing={onSubmitEditing}
            />
            <Button
              onPress={setData()}
              title="speichern"
              color="#841584"
            />
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      padding: 10,
      backgroundColor: '#dcdcdc'
    },
    input: {
      padding: 15,
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
       margin: 10
    },
    button: {
      margin: 10,
      padding: 10,
      backgroundColor: 'yellow'
    },
    buttonText: {
      fontSize: 18,
      color: '#444'
    }
  })

export default Test;


// TODO:
// BUTTON einfügen der bei onpress den inhalt von setdate anzeigt
// versuchen den textinput in die funktion zu leiten