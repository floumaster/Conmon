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
    }
})

export default styles