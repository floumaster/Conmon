import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
    },
    periodsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    periodWrapperDisabled: {
        borderBottomWidth: 3,
        borderBottomColor: colors.subText,
        borderStyle: 'solid',
    },
    periodWrapper: {
        borderBottomWidth: 3,
        borderBottomColor: colors.whiteBlue,
        borderStyle: 'solid',
    },
    periodTitle: {
        color: colors.textPrimary,
        marginBottom: 5
    },
    chartWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    barChartWrapper: {
        marginTop: 70,
        width: '85%',
        alignItems: 'center'
    },
    periodTitleDisabled: {
        color: colors.subText,
        marginBottom: 5
    },
    descriptionWrapper: {
        paddingHorizontal: 10,
        borderColor: colors.subText,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        paddingVertical: 10
    },
    currentPeriodWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    currentPeriodText: {
        color: colors.textPrimary,
        fontSize: 16,
    },
    spendingWrapper: {
        borderColor: colors.textPrimary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 10,
        width: '100%',
        height: 120,
        marginBottom: 30
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
    done: {
        backgroundColor: colors.green
    },
    notDone: {
        backgroundColor: colors.orange
    },
    AxisTextStyle: {
        color: colors.textPrimary
    }
})

export default styles