import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const blue = '#0253a3';

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
        backgroundColor: blue,
        justifyContent: 'center',
        paddingLeft: '5%',
    },
    menuHeaderTitle: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },
    menuHeaderSubTitle: {
        color: 'white',
        fontSize: 17,
    },
    menuFooter: {
        height: 150,
        backgroundColor: blue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '20%'
    },
    menuContent: {
        backgroundColor: blue,
    },

    // LOGIN
    loginContainer: {
        flex: 1,
        paddingVertical: 20,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#f9f9f9'
    },
    loginGroup: {
        height: windowHeight / 2 - (windowHeight * 5 / 100),
        paddingVertical: '10%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loginInput: {
        height: 50,
        fontSize: 20,
        width: '80%',
        borderColor: 'gray',
        borderBottomWidth: 1
    },
    loginBtn: {
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: blue,
        elevation: 3,
        borderRadius: 5,
    },
    loginBtnSubscribe: {
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: blue,
        borderWidth: 1,
    },
    loginBtnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    loginBtnSubscribeTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: blue,
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '35%',
        marginHorizontal: "10%"
    },
    loginSeparator: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginSeparatorTxt: {
        fontSize: 15,
        width: '10%',
        textTransform: 'uppercase'
    },

    // USER SPACE
    userSpaceContainer: {
        flex: 1
    },
    userSpaceHeader: {
        flex:0.2,
        justifyContent: 'center',
        alignItems: 'center', 
        borderWidth: 0,
        borderColor: blue,
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 180,
        backgroundColor: blue
    },
    userSpaceUserInfo: {
        flex: 0.5,
        margin: '2%'
    },
    userSpaceTitle: {
        fontSize: 20, 
        fontWeight: 'bold'
    },

    // COMPONENT
    selectContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '80%'
    },
    selectLabel: {
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold'
    },
    selectPicker: {
        width: '100%',
        color: 'gray'
    }
});

export default styles;