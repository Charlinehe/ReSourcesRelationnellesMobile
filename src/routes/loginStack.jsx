import { createStackNavigator } from 'react-navigation-stack';
import { LoginView } from '../view/loginView';
import Header from '../component/header';
import React from 'react';

const screens = {
    LoginView: {
        screen: LoginView,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Accueil" />
            }
        }
    },
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0253a3',
        }
    }
});

export default HomeStack;