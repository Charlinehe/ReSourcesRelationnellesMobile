import { createStackNavigator } from 'react-navigation-stack';
import { HomeView } from '../view/homeView';
import { ResourceDetailView } from "../view/resourceDetailView";
import Header from '../component/header';
import React from 'react';

const screens = {
    HomeView: {
        screen: HomeView,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Accueil" />
            }
        }
    },
    ResourceDetail: {
        screen: ResourceDetailView,
        navigationOptions: {
            title: 'Ressource',
            headerTintColor: '#fff',
            headerStyle: {
                elevation: 1
            }
        }
    },
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0253a3',
            elevation: 0
        },
    }
});

export default HomeStack;