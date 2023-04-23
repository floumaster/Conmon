import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        padding: 10,
        rowGap: 15
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
        width: '100%',
        height: '50%',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    loginInput: {
        marginTop: 40,
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
        marginTop: 40
    },
    alternateButton: {
        color: colors.textPrimary,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    alternateButtonWrapper: {
        marginTop: 10
    }
})