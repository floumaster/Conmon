import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    titleInputWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.whiteBlue,
        borderStyle: 'solid',
        borderWidth: 2
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        color: colors.white,
        fontSize: 16,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: colors.whiteBlue
    },
})

export default styles