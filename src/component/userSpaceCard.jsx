import React from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const maxDescriptonChar = 100;

export default function UserSpaceCard(props) {
    return (
        <View style={cardStyles.card}>
            <View>
                <Text style={cardStyles.label}>Nom:</Text>
                <Text>{props.user.lastname}</Text>
            </View>
            <View>
                <Text style={cardStyles.label}>Prénom:</Text>
                <Text>{props.user.firstname}</Text>
            </View>
            <View>
                <Text style={cardStyles.label}>Mail:</Text>
                <Text>{props.user.mail}</Text>
            </View>
            <View>
                <Text style={cardStyles.label}>Catégorie d'age:</Text>
                <Text>{props.user.ageCategory}</Text>
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    card: {
        borderRadius: 6,
        borderWidth: 1,
        elevation: 0,
        paddingHorizontal: 6, 
        paddingVertical: 8,
        width: windowWidth - 12,
    },
    label: {
        fontWeight: 'bold'
    }
})