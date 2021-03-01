import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginView from '../view/loginView';
import { SubscribeView } from '../view/subscribeView';
import { SubcribeComplementaryView } from '../view/subcribeComplementaryView';
import { SubcribeFinalView } from '../view/subcribeFinalView';
import Header from '../component/header';

const screens = {
    LoginView: {
        screen: LoginView,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Connexion" />
            }
        }
    },
    SubscribeView: {
        screen: SubscribeView,
        navigationOptions: {
            title: 'Inscription',
            headerTintColor: '#fff',
        }
    },
    SubcribeComplementaryView: {
        screen: SubcribeComplementaryView,
        navigationOptions: {
            title: 'Informations complémentaire',
            headerTintColor: '#fff',
        }
    },
    SubcribeFinalView: {
        screen: SubcribeFinalView,
        navigationOptions: {
            title: 'Informations complémentaire',
            headerTintColor: '#fff',
        }
    },
};

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0253a3',
            elevation: 1
        }
    }
});

export default LoginStack;