import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from '../style';

export class SubscribeView extends React.Component {
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
                        secureTextEntry={true}
                        placeholder='Mot de passe'
                        textContentType='password'
                    />
                    <TextInput
                        style={styles.loginInput}
                        secureTextEntry={true}
                        placeholder='Confirmation du mot de passe'
                        textContentType='password'
                    />
                </View>

                <View style={styles.loginGroup}>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('SubcribeComplementaryView')}>
                        <Text style={styles.loginBtnTxt}>Suivant</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

