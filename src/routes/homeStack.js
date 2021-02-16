import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HomeView } from '../view/homeView';
import { ResourceDetailView } from "../view/resourceDetailView";

const screens = {
    HomeView: {
        screen: HomeView,
        navigationOptions: {
            title: '',
            headerStyle: {
                backgroundColor: '#0253a3'
            }
        }
    },
    ResourceDetail: {
        screen: ResourceDetailView,
        navigationOptions: {
            title: 'Ressource',
            headerStyle: {
                backgroundColor: '#0253a3'
            },
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center'
            }
        }
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);