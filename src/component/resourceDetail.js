import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import styles from '../style';

const windowWidth = Dimensions.get('window').width;

function convertDate(strDate) {
    let date = new Date(strDate);
    let dateFormated = formatNumber(date.getDay()) + "/" + formatNumber(date.getMonth()) + "/" + date.getFullYear()
        + ' à ' + formatNumber(date.getHours() )+ 'h' + formatNumber(date.getMinutes());
    return dateFormated;
}

function formatNumber(number) {
    let formatNumber = '0' + number.toString();
    return formatNumber.substring(formatNumber.length - 2, formatNumber.length);
}

export default function resourceDetail(props) {
    return (
        <View>
            <Text style={styles.resourceDetailTitle}>{props.title}</Text>
            <Text style={styles.resourceDetailDate}>Le {convertDate(props.date)}</Text>
            <Text>Auteur : {props.author}</Text>
            <Text>Catégorie : {props.category}</Text>
            <Text>Description : {props.description}</Text>
        </View>
    )
}