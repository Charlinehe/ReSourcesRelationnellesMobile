import React from 'react';
import { Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import styles from '../style';

export class userSpaceHomeView extends React.Component {
    render() {
        return (
            <View style={styles.userSpaceContainer}>
                <View style={styles.userSpaceHeader}>
                    <EvilIcons name="user" size={150} color={"white"}/>
                </View>
                <View style={styles.userSpaceUserInfo}>
                    <Text style={styles.userSpaceTitle}>Informations Personnelles</Text>
                </View>
            </View>
        )
    }
}