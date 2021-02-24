import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style';

export default class LoginView extends React.Component {

    constructor() {
        this.state = {
            username: null,
            password: null
        }
    }

    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    userLogin() {
        if (!this.state.username || !this.state.password) return;
        fetch(USER_LOGIN, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.id_token) {
                    this.saveItem('id_token', responseData.id_token)
                    Alert.alert('Connexion réussi!', "La connexion est réussie, vous allez être redirigé vers l'accueil");
                    this.navigation.navigate('HomeView')
                } else {
                    Alert.alert('Connexion échouée!', "La connexion a échouée, identifiants ou mot de passe invalide");
                    this.setState({ username: null, password: null })
                }
            })
            .done();
    }


    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginGroup}>
                    <TextInput
                        style={styles.loginInput}
                        placeholder='Identifiant'
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <TextInput
                        style={styles.loginInput}
                        placeholder='Mot de passe'
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>

                <View style={styles.loginGroup}>
                    <TouchableOpacity style={styles.loginBtn} onPress={this.userLogin}>
                        <Text style={styles.loginBtnTxt}>Connexion</Text>
                    </TouchableOpacity>
                    <View style={styles.loginSeparator}>
                        <View style={styles.separator} />
                        <Text style={styles.loginSeparatorTxt}>ou</Text>
                        <View style={styles.separator} />
                    </View>
                    <TouchableOpacity
                        style={styles.loginBtnSubscribe}
                        onPress={() => this.props.navigation.navigate('SubscribeView')}>
                        <Text style={styles.loginBtnSubscribeTxt}>Inscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: '#0253a3' }}>Mot de passe oublié</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
