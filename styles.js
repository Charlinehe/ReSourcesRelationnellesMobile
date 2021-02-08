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
        height: 125
    }, 
    cardComponent: {
        margin: 10,
    }
})

export const cardComponentStyles = StyleSheet.create ({
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    cardComponent: {
        flex: 1,
        flexDirection: 'row'
    },
    cardImg: {
        margin: 100,
        backgroundColor: "#000"
    },
    content: {
        marginRight: 100,
        textAlign: 'justify'
    },
    cardImg: {
        width: 100,
        height: 100,
    }
})