import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../style';

export default function Select(props) {

    return (
        <View style={styles.selectContainer}>
            <Text style={styles.selectLabel}>{props.label}</Text>
            <Picker
                style={styles.selectPicker}
            >
                {props.values.map((item) => {
                    return <Picker.Item
                        key={item.id}
                        label={item.label}
                        value={item.value}
                    />
                })}
            </Picker>
        </View>
    )
}