import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { PUBLIC_RESOURCES } from "../api"
import Card from '../component/card';
import Search from '../component/searchbar'

export class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      resources: [],
      searchValue: null
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
      return <ActivityIndicator size="large" color="#0000ff" />
    } else {
      return (
        <View style={styles.body}>
          <Search value={this.state.searchValue} onChangeText={(val) => this.setState({ searchValue: val})} />
          <FlatList
            data={resources}
            renderItem={({ item }) => (
              <Card key={item.id} title={item.title} description={item.description} />
            )}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#0253a3',
  },
  test:{
    color: 'red',
    marginVertical: 10,
    fontSize: 50,

  }
})