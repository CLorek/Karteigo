import React from 'react';
import {View, Button, Text, FlatList, ImageBackground} from 'react-native';
import data from '../../mocks/cardData.json';
import image from '../../assets/paper.png';
import styles from "../../styles/main";

const ShowCards = () => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>All Cards Screen</Text>

                <FlatList
                    style={{width: "100%", backgroundColor: "yellow"}}
                    data={data}
                    renderItem={({item}) => (
                    <>
                        <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>{item.question}</Text>
                        <Text style={{color: 'green'}}>{item.answer}</Text>
                        <Text style={{color: 'blue', borderBottomStyle: 'solid', borderBottomWidth: 1, borderColor: 'darkGrey'}}>{item.stack}</Text>
                    </>
                    )}
                />

            </View>
        </ImageBackground>
    )
}


export default ShowCards;