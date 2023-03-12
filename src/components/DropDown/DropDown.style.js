import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    box: {
        marginTop: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.whiteBlue,
    },
    boxText: {
        color: colors.textPrimary,
        fontSize: 15
    },
    dropDown: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.whiteBlue,
    },
    dropDownItemText: {
        color: colors.textPrimary,
        fontSize: 15
    }
})

export default styles