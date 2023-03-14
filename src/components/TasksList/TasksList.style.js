import { StyleSheet } from 'react-native'
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
    }
})