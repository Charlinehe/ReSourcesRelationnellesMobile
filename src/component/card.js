import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const maxTitleChar = 20;
const maxDescriptonChar = 150;

export default function Card(props) {
    return (
        <View style={ cardStyles.card }>
            <View style={ cardStyles.cardComponent }>
                <Image
                    style={cardStyles.cardImg}
                    source={require('../../assets/adaptive-icon.png')}
                />
                <View style={ cardStyles.cardDetail }>
                    <View style={cardStyles.row}>
                        <Text style={cardStyles.title}>{((props.title).length > maxTitleChar) ? ((props.title).substr(0, maxTitleChar - 3) + "...").toUpperCase() : props.title.toUpperCase()}</Text>
                        <FontAwesome name="heart" size={20} color="red" />
                    </View>
                    <Text style={cardStyles.content}>{((props.description).length > maxDescriptonChar) ? (props.description).substr(0, maxDescriptonChar - 3) + "..." : props.description}</Text>
                </View>
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create ({
    card: {
        borderRadius: 6,
        backgroundColor: '#FFF',
        elevation: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 1 },
        marginHorizontal: 6,
        marginVertical: 8,
        height: 125,
        width: windowWidth - 12,
        justifyContent: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    cardComponent: {
        flexDirection: 'row',
    },
    cardDetail: {
        paddingHorizontal: 3,
    },
    cardImg: {
        width: 100,
        height: 100,
    },
    content: {
        marginRight: 100,
        textAlign: 'justify'
    },
    row: {
        width: windowWidth - 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})