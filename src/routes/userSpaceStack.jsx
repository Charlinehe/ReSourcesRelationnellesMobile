import React from 'react';
import {userSpaceHomeView} from '../view/userSpaceHomeView';
import Header from '../component/header';
import {createStackNavigator} from "react-navigation-stack";

const screens = {
    Home: {
        screen: userSpaceHomeView,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Espace personnel" />
            }
        }
    }
}

const UserSpaceStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0253a3',
            elevation: 1
        }
    }
});

export default UserSpaceStack;