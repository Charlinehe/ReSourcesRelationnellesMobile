import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import LoginStack from './loginStack';
import MenuView from '../view/menuView';

const MenuDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: "Accueil"
        }
    },
    Login: {
        screen: LoginStack,
        navigationOptions: {
            title: "Connexion"
        }
    }
}, {
    contentComponent: MenuView,
    drawerWidth: 325,
    contentOptions: {
        activeTintColor: '#0253a3',
        activeBackgroundColor: '#fff',
        inactiveTintColor: '#fff',
        inactiveBackgroundColor: '#0253a3',
    }
});

export default createAppContainer(MenuDrawerNavigator);