import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
    },
    partWrapper: {
        marginBottom: 20,
    },
    partTitle: {
        fontSize: 15,
        color: colors.textPrimary,
        marginBottom: 10
    },
    spendingsWrapper: {
        borderWidth: 2,
        borderColor: colors.subText,
        borderRadius: 10,
        padding: 10,
        height: 230,
        marginBottom: 16
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
    spendingStatsText: {
        fontSize: 10,
        color: colors.subText,
        width: 60
    },
    spendingStatsValue: {
        color: colors.whiteBlue,
        fontWeight: 'bold',
        fontSize: 12,
    },
    done: {
        backgroundColor: colors.green
    },
    notDone: {
        backgroundColor: colors.orange
    },
    spendingsRowWrapper: {
        flexDirection: 'row',
        columnGap: 10,
        marginBottom: 10
    }
})

export default styles