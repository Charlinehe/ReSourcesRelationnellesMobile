import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function resourceDetail(props) {
    return (
        <View>
            <Text>titre : {props.title}</Text>
            <Text>Date : {props.date}</Text>
            <Text>Auteur : {props.author}</Text>
            <Text>Catégorie : {props.category}</Text>
            <Text>Description : {props.description}</Text>
        </View>
    )
}