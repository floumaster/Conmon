import { StyleSheet } from "react-native";
import colors from "constants/colors";

const styles = StyleSheet.create({
    buttonWrapper: {
        width: '100%',
        height: 60,
        backgroundColor: colors.background,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.whiteBlue,
        borderStyle: 'solid',
        borderWidth: 2
    },
    buttonText: {
        fontSize: 16,
        color: colors.white
    }
})

export default styles