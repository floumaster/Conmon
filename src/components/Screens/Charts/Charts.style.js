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
    }
})

export default styles