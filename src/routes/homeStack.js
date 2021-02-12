import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HomeView } from '../view/homeView';

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
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);