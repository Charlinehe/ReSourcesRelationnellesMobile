import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HomeView } from '../view/homeView';
import { ResourceDetailView } from "../view/resourceDetailView";

const screens = {
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
    HomeView: {
        screen: HomeView,
        navigationOptions: {
            title: '',
            headerStyle: {
                backgroundColor: '#0253a3',
                elevation: 0,

            }
        }
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);