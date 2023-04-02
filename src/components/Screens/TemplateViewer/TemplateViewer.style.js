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
        height: 300,
        marginBottom: 16
    },
    partValueWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.whiteBlue,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    partValue: {
        fontSize: 16,
        color: colors.textPrimary,
    },
    wrapperLikeInput: {
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.whiteBlue,
        borderStyle: 'solid',
        padding: 10,
        width: '85%'
    }
})

export default styles