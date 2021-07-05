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
import { Card } from 'react-native-paper';

const Test = () => {


//     const [questionValue, setQuestionValue] = useState('');
//     const [value, setValue] = useState('');

//     const saveData = () => {
//         if(questionValue){
//             AsyncStorage.setItem('question_key', questionValue);
//             setQuestionValue('');
//             alert('Question Saved!');
//         }else{
//             alert('Please type in question!');
//         }
//     }

//     const callData = () => {
//         AsyncStorage.getItem('question_key')
//         .then((value) => {
//             setValue(value);
//         })
//     }

//     return(
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

//             <Text> AsyncStorage Test in React Native </Text>
//             <TextInput
//                 placeholder='Bitte Frage eingeben!'
//                 value={questionValue}
//                 onChangeText={(data) => setQuestionValue(data)}>
//             </TextInput>
//             <Button onPress={saveData} title='Save Question'/>
//             <Button onPress={callData} title='Get Question'/>
//             <Text>{value}</Text>
//         </View>
//     )

// }

const [value, setValue] = useState('');

const[card, setValues] = useState({
    title: '',
    question: '',
    answer: ''
})


const saveData = () => {
    if(true){
        const jsonCard = JSON.stringify(card);
        AsyncStorage.setItem('card_key', jsonCard);
        alert('Question Saved!');
    }else{
        alert('Please type in question!');
    }
}



const updateField = e => {
    setValues({
      ...card,
      [e.target.name]: e.target.value
    });
  };



// const callData = () => {
//     AsyncStorage.getItem('card_key')
//     .then((value) => {
//         setValue(value);
//     })
// }

function alertMe() {
    alert(card.title)
}

return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <Text> AsyncStorage Test in React Native </Text>
        <TextInput
            placeholder='Kartentitel eingeben..'
            name = "title"
            value={card.title}
            onChangeText={updateField}>
        </TextInput>
        <TextInput
            placeholder='Fragestellung eingeben..'
            name = "question"
            value={card.question}
            onChangeText={updateField}>
        </TextInput>
        <TextInput
            placeholder='Antwortmöglichkeit eingeben..'
            name = "answer"
            value={card.answer}
            onChangeText={updateField}>
        </TextInput>
        <View style={[{ width: "90%", margin: 10 }]}>
        <Button onPress={saveData} title='Save Card'/>
        <Button onPress={alertMe} title='alert'/>
        {/* <Button onPress={callData} title='Get Card'/> */}
        </View>

        <Text>{value}</Text>
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
        margin: 15,
        padding: 10,
        backgroundColor: 'yellow',
    },
    buttonText: {
        fontSize: 18,
        color: '#444'
    }
  })

export default Test;

