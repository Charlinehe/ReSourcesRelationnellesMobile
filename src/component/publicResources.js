import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { PUBLIC_RESOURCES } from "../api"
import Card from './card';
import CardComponent from './cardComponent'


const headers = new Headers();
headers.append('Access-Control-Allow-Origin', 'http://192.168.0.46:3005');
headers.append('Access-Control-Allow-Credentials', 'true');

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
    fetch(PUBLIC_RESOURCES, headers)
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
      return <ActivityIndicator size="large" color="#0000ff" />

    } else {
      return (
        <View>
          <ScrollView>
          {resources.map(item => (
            <Card key={item.id} title={item.title} description={item.description}/>
          ))}
          </ScrollView>
        </View>
      )
    }
  }
}