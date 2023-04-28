import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 10,
        rowGap: 15,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    logoWrapper: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        fontSize: 35,
        fontWeight: 'bold',
        top: 100,
        color: colors.textPrimary
    },
    form: {
        top: -20,
        width: '100%',
        // width: '100%',
        // height: Dimensions.get('window').height / 2,
        // alignItems: 'center',
        paddingHorizontal: 20,
        // backgroundColor: colors.green
    },
    loginInput: {
        width: '100%',
        height: 50,
        borderBottomColor: colors.whiteBlue,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        color: colors.textPrimary
    },
    passwordInput: {
        width: '100%',
        height: 50,
        borderBottomColor: colors.whiteBlue,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        color: colors.textPrimary,
        marginTop: 20
    },
    button: {
        marginTop: 20
    },
    alternateButton: {
        color: colors.textPrimary,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    alternateButtonWrapper: {
        marginTop: 10
    },
    errorWrapper: {
        marginTop: 20,
        height: 20
    },
    errorText: {
        color: 'red'
    }
})