import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PUBLIC_RESOURCES } from "../api.js"
import Card from './card';

export class PublicResource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      resources: []
    };
  }

  componentDidMount() {
    fetch(PUBLIC_RESOURCES)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            resources: data
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

  render() {
    const { error, isLoaded, resources } = this.state;
    if (error) {
      return <Text>Erreur : {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text>Chargement...</Text>
    } else {
      return (
        <View>
          <ScrollView>
          {resources.map(item => (
            <Card>
              <Text key={item.id}>
                {item.title}
              </Text>
            </Card>
          ))}
          </ScrollView>
        </View>
      )
    }
  }
}