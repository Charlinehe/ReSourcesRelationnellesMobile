import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from '../style';

export class LoginView extends React.Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginGroup}>
                    <TextInput
                        style={styles.loginInput}
                        placeholder='Identifiant'
                    />
                    <TextInput
                        style={styles.loginInput}
                        placeholder='Mot de passe'
                    />
                </View>

                <View style={styles.loginGroup}>
                    <TouchableOpacity style={styles.loginBtn}>
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
                    <TouchableOpacity><Text style={{color: '#0253a3'}}>Mot de passe oublié</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

