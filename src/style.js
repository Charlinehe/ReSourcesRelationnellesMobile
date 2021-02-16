import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //DETAIL D'UNE RESSOURCE
    resourceDetailTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    resourceDetailDate: {
        fontSize: 10,
        color: '#808080'
    },
    resourceInfoView: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    resourceHeaderInfo: {
        fontSize: 15
    },
    resourceDescription: {
        padding: 10,
        color: '#666666'
    },
    resourceImage: {
        width: 80,
        height: 80
    }

});

export default styles;