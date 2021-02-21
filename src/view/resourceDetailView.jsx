import React from 'react';
import { ActivityIndicator, ScrollView, Text, View,  FlatList } from 'react-native';
import { RESOURCE_DETAIL, RESOURCE_VALUATION, RESOURCE_COMMENT } from '../settings';
import ResourceDetail from '../component/resourceDetail';
import Comment from '../component/comment';
import styles from "../style";

export class ResourceDetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            resource: [],
            valuation: 0,
            comments: []
        };
    }

    componentDidMount() {
        this.getResourceDetail()
        this.getResourceValuation()
        this.getResourceComment()
    }

    getResourceDetail() {
        fetch(RESOURCE_DETAIL + this.props.navigation.state.params.id)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        resource: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getResourceValuation() {
        fetch(RESOURCE_VALUATION + this.props.navigation.state.params.id)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data[0] === undefined) {
                        this.setState({
                            valuation: 0
                        })
                    } else {
                        console.log(data[0])
                        this.setState({
                            valuation: data[0].valuation
                        })
                    }
                },
                (error) => {
                    this.setState({
                        valuation: 0
                    })
                }
            )
    }

    getResourceComment() {
        fetch(RESOURCE_COMMENT + this.props.navigation.state.params.id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    this.setState({
                        comments: data
                    })
                },
                (error) => {
                    this.setState({
                        comments: []
                    })
                }
            )

    }

    render() {
        const { error, isLoaded, resource, valuation, comments } = this.state;
        if (error) {
            return <Text>Erreur : {error.message}</Text>;
        } else if (!isLoaded) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        } else {
            return (
                <View>
                    <ScrollView style={styles.resourceScrollView}>
                        <ResourceDetail title={resource[0].title} date={resource[0].date_creation}
                                        id={resource[0].id} author={resource[0].username} category={resource[0].category}
                                        description={resource[0].description} valuation={valuation}
                        />
                        <Text style={styles.commentTitle}>Commentaires</Text>
                        <FlatList
                            data={comments}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <Comment id={item.id} date={item.comment_date} author={item.username} content={item.content} />
                            )}
                        />
                    </ScrollView>
                </View>
            )
        }
    }
}