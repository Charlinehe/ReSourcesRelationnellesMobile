import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from '../style';

export class SubcribeComplementaryView extends React.Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginGroup}>
                    <TextInput
                        style={styles.loginInput}
                        placeholder='Nom'
                    />
                    <TextInput
                        style={styles.loginInput}
                        placeholder='Prénom'
                    />
                    <TextInput
                        style={styles.loginInput}
                        placeholder='Email'
                    />
                </View>

                <View style={styles.loginGroup}>
                    <TouchableOpacity 
                        style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('SubcribeFinalView')}>
                        <Text style={styles.loginBtnTxt}>Suivant</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

