import React from 'react';
import {View, Button, Text, FlatList} from 'react-native';
import data from '../../mocks/cardData.json';

const ShowCards = () => {
    return(
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
    )
}


export default ShowCards;