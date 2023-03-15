import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    titleWrapperActive: {
        width: '30%',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomColor: colors.whiteBlue,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    headerTitle: {
        marginBottom: 15,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        color: colors.white
    },
    titleActive: {
        color: colors.whiteBlue,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    titleWrapper: {
        width: '30%',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomColor: colors.subText,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    title: {
        color: colors.subText,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    spendingList: {
        height: '100%',
        width: '100%'
    },
    listColumnWrapper: {
        justifyContent: 'space-between',
    },
    listContentContainer: {
        rowGap: 12
    },
    spendingWrapper: {
        borderColor: colors.textPrimary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 10,
        width: '48%',
        height: 120,
    },
    spendingWrapperNew: {
        backgroundColor: colors.primary,
        borderColor: colors.textPrimary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 10,
        width: '48%',
        opacity: 0.3,
        height: 120
    },
    newSpendingButtonWrapper: {
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },  
    spendingTitle:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 12
    },
    spendingDescription: {
        color: colors.subText,
        fontSize: 10,
        marginTop: 5,
        marginBottom: 10,
        width: '100%'
    },
    spendingStatsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15
    },
    spendingStatsTextWrapper: {
    },
    spendingStatsValue: {
        color: colors.whiteBlue,
        fontWeight: 'bold',
        fontSize: 12,
    },
    spendingStatsText: {
        fontSize: 10,
        color: colors.subText,
        width: 60
    },
    taskListRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 10,
        marginBottom: 10,
        width: '100%'
    },
    spendingTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    markerWrapper: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    done: {
        backgroundColor: colors.green
    },
    notDone: {
        backgroundColor: colors.orange
    },
    inputWrapper:{
        marginTop: 0,
        marginBottom: 20,
        top: 5,
        width: '90%'
    },
    inputWrapperStyle: {
        top: -5,
        width: '70%'
    },
    sortBar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filterIconWrapper: {
        top: -5,
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.whiteBlue,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    handleStyle: {
        backgroundColor: colors.whiteBlue,
    },
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
        borderRadius: 10
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
    }
})