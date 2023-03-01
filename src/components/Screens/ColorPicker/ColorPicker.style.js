import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
    },
    text: {
        position: 'absolute',
        top: 160,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles