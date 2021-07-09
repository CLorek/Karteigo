import React from 'react';
import {View, Image, Text, FlatList, ImageBackground} from 'react-native';
import styles from '../../styles/main';
import image from '../../assets/paper.png';
import cardImage from '../../assets/card.png';
import FlipCard from 'react-native-flip-card';

const ShowSingleCard = ({route}) => {

    const {title, question, answer, stack} = route.params;

    return(

        <ImageBackground source={image} style={styles.backgroundContainer}>
            <View style={styles.headerContainer}>

            </View>

            <View style={styles.contentContainer}>
                <FlipCard
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    <View style={styles.cardContainer}>
                        <Image style={styles.cardImage} source={cardImage}></Image>
                        <Text style={styles.cardText}> {JSON.stringify(question)} </Text>
                    </View>

                    <View style={styles.cardContainer}>
                        <Image style={styles.cardImage} source={cardImage}></Image>
                        <Text style={styles.cardText}> {JSON.stringify(answer)} </Text>
                    </View>
                </FlipCard>
            </View>

            <View style={styles.footerContainer}></View>
        </ImageBackground>
    )
}

export default ShowSingleCard;