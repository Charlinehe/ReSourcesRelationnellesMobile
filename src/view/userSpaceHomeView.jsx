import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import styles from '../style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_INFO} from "../settings";

export class userSpaceHomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            personalInformations: {},
            accessToken: ''
        }
    }


    componentDidMount() {
        this.getPersonalInformation();
    }

    getPersonalInformation = async() => {
        try {
            //const token = await AsyncStorage.getItem('id_token')
            //this.setState({accessToken: token})

            fetch(USER_INFO, {
                method: 'GET',
                headers: {'Authorization': token}
            })
                .then((response) => response.json())
                .then(
                    (data) => {
                        console.log('recup info')
                        this.setState({
                            isLoaded: true,
                            personalInformations: data
                        })
                        console.log(this.state)
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    })
        } catch (e) {
            alert('Impossible de récupérer l\'identifiant. Merci de vous connecter avant d\'accéder à cette page')
        }
    }

    render() {
        return (
            <View style={styles.userSpaceContainer}>
                <View style={styles.userSpaceHeader}>
                    <EvilIcons name="user" size={150} color={"white"}/>
                </View>
                <View style={styles.userSpaceUserInfo}>
                    <Text style={styles.userSpaceTitle}>Informations Personnelles</Text>
                </View>
                <View>
                    <Text>Siku</Text>
                    <Text>Mimi</Text>
                    <Text>mimi_siku@lipolipo.com</Text>
                    <Text>Enfant</Text>
                </View>
            </View>
        )
        /*
        const { error, isLoaded, personalInformations } = this.state;
        console.log(this)
        console.log('render')
        console.log(personalInformations)
        if (error) {
            return <Text>Erreur : {error.message}</Text>;
        } else if(!isLoaded) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        } else {
            if (!personalInformations.error) {
                return (
                    <View>
                        <Text>Siku</Text>
                        <Text>Mimi</Text>
                        <Text>mimi_siku@lipolipo.com</Text>
                        <Text>Enfant</Text>
                    </View>
                )
            } else {
                return <Text>{personalInformations.error}</Text>
            }
        }*/
    }
}