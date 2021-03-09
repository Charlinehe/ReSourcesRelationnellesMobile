import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const maxDescriptonChar = 100;

export default function HomeCard(props) {
    return (
        <Pressable
            onPress={() => props.displayResourceDetail(props.id)}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#DCDCDC' : 'white'
                },
                cardStyles.card,
            ]}
        >
            <View style={cardStyles.cardComponent}>
                <Image
                    style={cardStyles.cardImg}
                    source={require('../../assets/work.png')}
                />
                <View style={cardStyles.cardDetail}>
                    <View style={cardStyles.row}>
                        <Text style={cardStyles.title}>{props.title.toUpperCase()}</Text>
                        {displayHeart(props.id)}
                    </View>
                    <Text style={cardStyles.content}>{((props.description).length > maxDescriptonChar) ? (props.description).substr(0, maxDescriptonChar - 3) + "..." : props.description}</Text>
                </View>
            </View>
        </Pressable>
    )
}

function displayHeart(id) {
    if (id % 15 === 0) {
        return <FontAwesome name="heart" size={20} color="red" />
    }
}

const cardStyles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 1 },
        marginHorizontal: 6,
        marginVertical: 8,
        // height: 125,
        width: windowWidth - 12,
        justifyContent: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    cardComponent: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    cardDetail: {
        paddingHorizontal: 3,
        paddingVertical: 6,
    },
    cardImg: {
        width: 100,
        height: 100,
    },
    content: {
        paddingTop: 10,
        marginRight: 100,
        textAlign: 'left'
    },
    row: {
        width: windowWidth - 145,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})