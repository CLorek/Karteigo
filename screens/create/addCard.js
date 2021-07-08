import React, { useState, useEffect } from 'react'
import {FAB} from 'react-native-paper';
import styles from '../../styles/main';
import {
    StyleSheet,
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
  } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';

const addCard = () => {



const[card, setValues] = useState({
    title: '',
    question: '',
    answer: '',
    stack: ''
})


const saveData = () => {
    try{
        const jsonCard = JSON.stringify(card);
        AsyncStorage.setItem(card.title, jsonCard);
        alert('Karteikarte gespeichert!');
    }catch(e){
        alert('Fehler beim abspeichern der Karte');
    }
}


const updateField = (name) => (value) =>{
    setValues({
       ...card,
       [name]: value
     });
 }



const callData = async() => {
    try {
        const jsonValue =  await AsyncStorage.getItem(card.title);
        const parsed = JSON.parse(jsonValue);
        alert(parsed.question);
    } catch(e) {
        alert("Karte "+card.title+ " nicht vorhanden!");
    }

}

const clearAsyncStorage = async() => {
    Alert.alert(
        "Sind Sie sicher?",
        "Alle Karteikarten werden gelöscht",
        [
          {
            text: "Ja",
            onPress: () => {
              AsyncStorage.clear();
            },
          },
          {
            text: "Nein",
          },
        ]
      );
}

const deleteCard = async() => {
    try {
        await AsyncStorage.removeItem(card.title);
        alert(card.title+" wurde gelöscht");
        return true;
    }
    catch(exception) {
        return false;
    }
}




return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <Text> AsyncStorage Test in React Native </Text>
        <TextInput
            placeholder='Kartentitel eingeben..'
            name = "title"
            value={card.title}
            onChangeText={updateField("title")}>
        </TextInput>
        <TextInput
            placeholder='Fragestellung eingeben..'
            name = "question"
            value={card.question}
            onChangeText={updateField("question")}>
        </TextInput>
        <TextInput
            placeholder='Antwortmöglichkeit eingeben..'
            name = "answer"
            value={card.answer}
            onChangeText={updateField("answer")}>
        </TextInput>
        <TextInput
            placeholder='Stapel'
            name = "stack"
            value={card.stack}
            onChangeText={updateField("stack")}>
        </TextInput>
        <View style={[{ width: "90%", margin: 10 }]}>
        <Button onPress={saveData} title='Karte abspeichern'/>
        <Button onPress={callData} title='Karte abrufen'/>
        <Button onPress={clearAsyncStorage}title='Alle Karten löschen'/>
        <Button onPress={deleteCard}title='Karte xyz löschen'/>
        </View>

  
    </View>
)

}





export default addCard;

