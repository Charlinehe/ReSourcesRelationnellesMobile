import React from 'react';
import { Linking, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import { Entypo } from '@expo/vector-icons';
import styles from '../style';
import { FACEBOOK, MAIL, TWITTER } from '../settings'

const MenuView = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.menuHeader}>
                <Text style={styles.menuHeaderTitle}>ReSources Relationnelles</Text>
                <Text style={styles.menuHeaderSubTitle}>Ministère des solidarités et de la santé</Text>
            </View>

            <ScrollView style={styles.menuContent}>
                <SafeAreaView>
                    <DrawerItems {...props} />
                </SafeAreaView>
            </ScrollView>

            <View style={styles.menuFooter}>
                <Entypo name="facebook-with-circle" size={40} color="white" onPress={() => Linking.openURL(FACEBOOK)} />
                <Entypo name="twitter-with-circle" size={40} color="white" onPress={() => Linking.openURL(TWITTER)} />
                <Entypo name="mail-with-circle" size={40} color="white" onPress={() => Linking.openURL("mailto:" + MAIL)} />
            </View>
        </View>
    );
};

export default MenuView;