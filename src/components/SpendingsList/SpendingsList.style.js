import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    spendingWrapper: {
        borderColor: colors.textPrimary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 10,
        width: '48%',
        height: 120,
    },
    spendingTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    spendingTitle:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 12
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
    waitingToSelect: {
        backgroundColor: colors.subText
    },
    toRemove: {
        backgroundColor: 'red',
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
    spendingTitle:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 12
    },
    newSpendingButtonWrapper: {
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    listColumnWrapper: {
        justifyContent: 'space-between',
    },
    listContentContainer: {
        rowGap: 12
    },
})