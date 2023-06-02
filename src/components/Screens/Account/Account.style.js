import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
    },
    profileWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    personalInfoText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: 'bold'
    },
    personalInfo: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center'
    },
    moneyInfo: {
        width: '100%',
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.textPrimary,
        padding: 20
    },
    currencyTitle: {
        fontSize: 16,
        color: colors.textPrimary
    },
    budgetWrapper: {
        marginTop: 10
    },
    budgetInput: {
        borderBottomColor: colors.whiteBlue,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        paddingHorizontal: 5,
        color: colors.textPrimary
    },
    logoutWrapper: {
        height: '25%',
        justifyContent: 'flex-end'
    },
    submitButton: {
        marginTop: 40
    }
})