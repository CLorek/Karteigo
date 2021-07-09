import React, { useState, useEffect } from 'react'
import {FAB} from 'react-native-paper';
import styles from "../../styles/main";
import image from '../../assets/paper.png';
import {
    StyleSheet,
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ImageBackground
  } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import { parse } from '@babel/core';



const topics = ["Programmieren", "Mathe", "Physik", "Kryptografie"]
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
        alert("Thema: "+ parsed.stack+", Titel: "+parsed.title+", Frage: "+parsed.question+", Antwort: "+parsed.answer+" ");
    } catch(e) {
        alert("Karte "+card.title+ " nicht vorhanden!");
    }

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
    <ImageBackground source={image} style={styles.backgroundContainer}>
        <View style={styles.headerContainer}></View>
        <View style={styles.contentContainer}>
            <Text style={{fontSize: 30, marginBottom: 40}}> Fülle aus: </Text>
            <View style={styles.dropdownsRow} >
            <SelectDropdown defaultButtonText="Themengebiet"
                data={topics}
                onSelect={updateField("stack")}

                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            </View>


            <TextInput style={styles.inputSmall}
                placeholder='Kartentitel eingeben..'
                name = "title"
                value={card.title}
                onChangeText={updateField("title")}>
            </TextInput>
            <TextInput style={styles.inputMedium}
                placeholder='Fragestellung eingeben..'
                name = "question"
                value={card.question}
                multiline={true}
                onChangeText={updateField("question")}>
            </TextInput>
            <TextInput style={styles.inputLarge}
                placeholder='Antwortmöglichkeit eingeben..'
                name = "answer"
                value={card.answer}
                multiline={true}
                onChangeText={updateField("answer")}>
            </TextInput>

            <View style={[{ width: "90%", margin: 10 }]}>
                <Button onPress={saveData} title='Karte abspeichern'/>
                <Button onPress={callData} title='Karte abrufen'/>
                <Button onPress={deleteCard}title='Karte xyz löschen'/>
            </View>
        </View>
        <View style={styles.footerContainer}></View>
    </ImageBackground>
)

}





export default addCard;

