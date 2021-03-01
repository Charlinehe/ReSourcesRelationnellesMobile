import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import styles from '../style';
import Valuation from "./valuation";
import utils from '../utils'

const windowWidth = Dimensions.get('window').width;

export default function resourceDetail(props) {
    return (
        <View>
            <Text style={styles.resourceDetailTitle}>{props.title}</Text>
            <View style={styles.resourceInfoView}>
                <View>
                    <Text style={styles.resourceDetailDate}>Le {utils.convertDate(props.date)}</Text>
                    <Text style={styles.resourceHeaderInfo}>{props.category}</Text>
                </View>
                <View>
                    <Text style={styles.resourceHeaderInfo}>{props.author}</Text>
                </View>
            </View>
            <Text style={styles.resourceDescription}>{props.description}</Text>
            <View style={styles.resourceInfoView}>
                <View style={styles.valuationView}>
                    <Valuation
                        starSize = {20}
                        readOnly = {true}
                        value = {props.valuation}
                        fractions = {10}
                    />
                </View>
                <Image
                    style={styles.resourceImage}
                    source={require('../../assets/work.png')}
                />
            </View>
        </View>
    )
}