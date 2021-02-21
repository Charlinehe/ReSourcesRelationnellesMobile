import React from 'react';
import {ActivityIndicator, Dimensions, Text, View,  FlatList} from 'react-native';
import { COMMENT_ANSWER } from '../settings';
import Answer from "./answer";
import styles from "../style";
import utils from '../utils';

const windowWidth = Dimensions.get('window').width;

export default class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            answers: []
        };
    }

    componentDidMount() {
        fetch(COMMENT_ANSWER + this.props.id)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        answers: data
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, answers } = this.state;
        if (error) {
            return <Text>Erreur : {error.message}</Text>
        } else if (!isLoaded) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        } else {
            return (
                <View style={styles.resourceCommentView}>
                    <View style={styles.resourceCommentHeaderView}>
                        <Text style={styles.resourceCommentDate}>Le {utils.convertDate(this.props.date)}</Text>
                        <Text style={styles.resourceCommentAuthor}>{this.props.author}</Text>
                    </View>
                    <Text style={styles.resourceCommentContent}>{this.props.content}</Text>
                    <FlatList
                        data={answers}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <Answer id={item.id} date={item.answer_date} author={item.username} content={item.content} />
                        )}
                    />
                </View>
            )
        }
    }
}