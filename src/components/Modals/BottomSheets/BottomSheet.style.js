import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

export default StyleSheet.create({
    filterContentWrapper: {
        padding: 15
    },
    filterTitle: {
        color: colors.textPrimary,
        fontSize: 15
    },
    filterItemWrapper: {
        marginBottom: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.textPrimary,
        padding: 10,
        borderRadius: 10,
    },
    checkBoxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    checkBoxLabel: {
        marginLeft: 20,
        color: colors.textPrimary
    },
    datePickButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    datePickButtonWrapper: {
        width: '45%',
        alignItems: 'center'
    },
    commonButtonStyle: {
        height: 40
    },
    date: {
        marginTop: 10,
        color: colors.textPrimary
    },
    filterBackground: {
        backgroundColor: colors.primary,
    },
    handleStyle: {
        backgroundColor: colors.whiteBlue,
    },
    valuesWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    sliderWrapper: {
        alignItems: 'center',
    }
})