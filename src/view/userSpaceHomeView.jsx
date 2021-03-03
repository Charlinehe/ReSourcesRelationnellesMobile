import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
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
            const token = await AsyncStorage.getItem('id_token')
            this.setState({accessToken: token})

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
                        <Text>firstname : {personalInformations.firstname}</Text>
                        <Text>lastname : {personalInformations.lastname}</Text>
                        <Text>email : {personalInformations.email}</Text>
                        <Text>age_category : {personalInformations.age_category}</Text>
                    </View>
                )
            } else {
                return <Text>{personalInformations.error}</Text>
            }
        }
    }
}