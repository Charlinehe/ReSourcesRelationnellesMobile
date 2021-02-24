import React from 'react';
import { Dimensions, Text, View } from "react-native";
import styles from "../style";
import utils from '../utils'

const windowWidth = Dimensions.get('window').width;

export default function Answer(props) {
    return (
        <View style={styles.commentAnswerView}>
            <View style={styles.resourceCommentHeaderView}>
                <Text style={styles.commentAnswerDate}>{utils.convertDate(props.date)}</Text>
                <Text style={styles.commentAnswerAuthor}>{props.author}</Text>
            </View>
            <Text style={styles.commentAnswerContent}>{props.content}</Text>
        </View>
    )
}