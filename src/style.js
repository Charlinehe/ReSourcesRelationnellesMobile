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
        color: '#666666',
        fontSize: 17
    },
    resourceImage: {
        width: 80,
        height: 80
    },
    resourceScrollView: {
        backgroundColor: 'white'
    },
    valuationView: {
        paddingLeft: 20,
        alignSelf: 'center'
    },
    commentTitle: {
        paddingLeft: 5,
        fontSize: 18
    },
    resourceCommentView: {
        backgroundColor: '#0253a3',
        margin: 5,
        padding: 5,
        borderRadius: 5
    },
    resourceCommentHeaderView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    resourceCommentDate: {
        color: 'white',
        fontSize: 9
    },
    resourceCommentAuthor: {
        color: 'white',
        fontSize: 11
    },
    resourceCommentContent: {
        color: 'white',
        fontSize: 13,
        paddingTop: 7,
        marginBottom: 5
    },
    commentAnswerView: {
        backgroundColor: 'white',
        marginLeft: 15,
        marginBottom: 5,
        padding: 5,
        borderRadius: 5
    },
    commentAnswerDate: {
        fontSize: 9
    },
    commentAnswerAuthor: {
        fontSize: 11
    },
    commentAnswerContent: {
        fontSize: 13,
        paddingTop: 7
    },

    // MENU
    menuHeader: {
        height: 250,
        backgroundColor: '#0253a3',
        justifyContent: 'center',
        paddingLeft: '5%',
    },
    menuHeaderTitle: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },
    menuHeaderSubTitle:{
        color: 'white',
        fontSize: 17,
    },
    menuFooter: {
        height: 150,
        backgroundColor: '#0253a3',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '20%'
    },
    menuContent: {
        backgroundColor: '#0253a3',
    }
});

export default styles;