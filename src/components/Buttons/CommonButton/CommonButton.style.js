import { StyleSheet } from "react-native";
import colors from '../../../constants/colors'

const styles = StyleSheet.create({
    buttonWrapper: {
        width: '100%',
        height: 48,
        backgroundColor: 'transparent',
        borderRadius: 9,
        borderColor: colors.whiteBlue,
        borderStyle: 'solid',
        borderWidth: 2,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: colors.white,
    },
    readyIconWrapper: {
        width: 18,
        height: 18,
        borderRadius: 50,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pendingIconWrapper: {
        width: 18,
        height: 18,
        borderRadius: 50,
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles