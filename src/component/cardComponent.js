import React from 'react';
import { Image, Text, View } from 'react-native';
import { cardComponentStyles } from '../../styles';

export default function CardComponent(props) {

    const maxTitleChar = 20;
    const maxDescriptonChar = 150;
    return (
        <View style={cardComponentStyles.cardComponent}>
            <Image
                style={cardComponentStyles.cardImg}
                source={require('../../assets/adaptive-icon.png')}
            />
            <View >
                <Text style={cardComponentStyles.title}>{ ((props.title).length > maxTitleChar) ? ((props.title).substr(0, maxTitleChar-3) + "...").toUpperCase() : props.title.toUpperCase() }</Text>
                <Text style={cardComponentStyles.content}>{ ((props.description).length > maxDescriptonChar) ? (props.description).substr(0, maxDescriptonChar-3) + "..." : props.description  }</Text>
            </View>
        </View>
    )
}

