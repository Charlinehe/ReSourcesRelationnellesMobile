import React from 'react';
import {ActivityIndicator, FlatList, ScrollView, Text, View} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import styles from '../style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_INFO, PUBLIC_RESOURCES } from "../settings";
import UserSpaceCard from "../component/userSpaceCard";
import HomeCard from "../component/homeCard";

export class userSpaceHomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            personalInformations: {
                firstname:"Mimi",
                lastname:"Siku",
                mail:"mimi_siku@lipolipo.com",
                ageCategory:"Enfant"
            },
            accessToken: '',
            createdResources: []
        }
    }


    componentDidMount() {
        this.getPersonalInformation();
        this.getCreatedResources();
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
            console.log(e)
            //alert('Impossible de récupérer l\'identifiant. Merci de vous connecter avant d\'accéder à cette page')
        }
    }

    getCreatedResources() {
        //L'appel de ce service est provisoire (permet de donner un visuel pour la présentation)
        fetch(PUBLIC_RESOURCES, {
            method: 'GET',
            headers: {
                limit: 3,
                page: 4
            }
        })
            .then((response) => response.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        createdResources: data
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    _displayResourceDetail = (idResource) => {
        this.props.navigation.navigate('ResourceDetail', {id: idResource})
    }

    render() {
        return (
            <View style={styles.userSpaceContainer}>
                <View style={styles.userSpaceHeader}>
                    <EvilIcons name="user" size={150} color={"white"}/>
                </View>
                <View style={styles.userSpaceUserInfo}>
                    <Text style={styles.userSpaceTitle}>Informations Personnelles</Text>
                    <UserSpaceCard user={this.state.personalInformations}/>
                </View>
                <View style={styles.userSpaceCreatedResources}>
                    <Text style={styles.userSpaceTitle}>Ressources créées</Text>
                    <ScrollView style={styles.resourceScrollView}>
                        <FlatList
                            //style={styles.flatlist}
                            data={this.state.createdResources}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <HomeCard title={item.title} type={item.relationship_type} description={item.description} displayResourceDetail={this._displayResourceDetail} id={item.id} />
                            )}
                        />
                    </ScrollView>
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