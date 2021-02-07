import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create ({
    card: {
        borderRadius: 6,
        backgroundColor: '#FFF',
        elevation: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 1 },
        marginHorizontal: 6,
        marginVertical: 8,
        height: 100
    }, 
    cardComponent: {
        margin: 10
    }
})