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
            <View style={styles.resourceInfoView}>
                <View>
                    <Text style={styles.resourceDetailDate}>Le {convertDate(props.date)}</Text>
                    <Text style={styles.resourceHeaderInfo}>{props.category}</Text>
                </View>
                <View>
                    <Text style={styles.resourceHeaderInfo}>{props.author}</Text>
                </View>
            </View>
            <Text style={styles.resourceDescription}>{props.description}</Text>
            <View style={styles.resourceInfoView}>
                <View>
                </View>
                <Image
                    style={styles.resourceImage}
                    source={require('../../assets/adaptive-icon.png')}
                />
            </View>
        </View>
    )
}