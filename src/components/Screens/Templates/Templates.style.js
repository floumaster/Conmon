import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
    },
    templatesWrapper: {
        width: '100%'
    },
    templateWrapperNew: {
        backgroundColor: colors.primary,
        borderColor: colors.textPrimary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 10,
        width: '100%',
        opacity: 0.3,
        height: 100,
        marginBottom: 10
    },
    templateWrapper: {
        backgroundColor: colors.primary,
        borderColor: colors.textPrimary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 7,
        padding: 10,
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: 'flex-start'
    },
    activeWrapper: {
        borderColor: colors.whiteBlue,
    },
    activeText: {
        color: colors.whiteBlue
    },
    templateTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    },
    templateTitleNew:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 12
    },
    newTemplateButtonWrapper: {
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    listContentContainer: {
        rowGap: 12
    },
    nameWrapper: {
        marginTop: 12,
        alignItems: 'center'
    },
    templateStatus: {
        color: colors.textPrimary
    }
})

export default styles