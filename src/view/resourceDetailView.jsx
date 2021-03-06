import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RESOURCE_DETAIL, RESOURCE_VALUATION } from '../settings';
import ResourceDetail from '../component/resourceDetail';

export class ResourceDetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            resource: [],
            valuation: 0
        };
    }

    componentDidMount() {
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

        this.getResourceValuation()

    }

    getResourceValuation() {
        fetch(RESOURCE_VALUATION + this.props.navigation.state.params.id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data[0].valuation);
                    this.setState({
                        valuation: data[0].valuation
                    })
                },
                (error) => {
                    this.setState({
                        valuation: 0
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, resource, valuation } = this.state;
        if (error) {
            return <Text>Erreur : {error.message}</Text>;
        } else if (!isLoaded) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        } else {
            return (
                <View>
                    <ScrollView>
                        <ResourceDetail title={resource[0].title} date={resource[0].date_creation}
                                        id={resource[0].id} author={resource[0].username} category={resource[0].category}
                                        description={resource[0].description} valuation={valuation}
                        />
                    </ScrollView>
                </View>
            )
        }
    }
}