import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;

export default function SearchBar(props) {
    
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <FontAwesome name="search" size={30} color="#8492A6" />
                <TextInput 
                    style={styles.input} 
                    placeholder='Rechercher...'
                    value={props.value}
                    onChangeText={props.onChangeText}
                    />
                <FontAwesome name="times" size={30} color="#8492A6" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 1 },
    },
    bar: {
        height: 50,
        width: windowWidth - 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    }, 
    input: {
        height: 50,
        width: windowWidth - 100,
        paddingHorizontal: 10,
        fontSize: 20
    }
})