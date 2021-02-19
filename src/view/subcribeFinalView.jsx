import React from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import Select from '../component/select';
import styles from '../style';

export class SubcribeFinalView extends React.Component {

    val = [
        { id: 0, label: "59 - Nord", value: "java" },
        { id: 1, label: "62 - Pas de Calais", value: "js" }
    ]

    val2 = [
        { id: 0, label: "Enfant", value: "java" },
        { id: 1, label: "Adulte", value: "js" }
    ]

    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.loginGroup}>
                    <Select label="Localisation" values={this.val} />
                    <Select label="Catégorie d'age" values={this.val2} />
                </View>

                <View style={styles.loginGroup}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginBtnTxt}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

