import React from 'react';
import {View, Text, Button, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import data from '../../mocks/cardData.json';
import image from '../../assets/paper.png';
import styles from "../../styles/main";
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowCards = ({navigation}) => {
    return(
        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <FlatList
                    style={{width: "100%"}}
                    data={data}
                    renderItem={({item}) => (
                    <>
                    <View style={styles.cardListElement}>
                        <TouchableOpacity
                                    style={styles.cardListButton}
                                    onPress={() => {navigation.navigate('ShowSingleCard', {
                                        title: item.title,
                                        question: item.question,
                                        answer: item.answer,
                                        stack: item.stack});
                        }}>
                            <View style={{flex: 4}}>
                                <Text style={styles.titleListElement}>{item.title}</Text>
                                <Text style={styles.subTitleListElement}>{item.question}</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Icon style={styles.listIcon} name='chevron-right'></Icon>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </>
                    )}
                />

            </View>
        </ImageBackground>
    )
}


export default ShowCards;