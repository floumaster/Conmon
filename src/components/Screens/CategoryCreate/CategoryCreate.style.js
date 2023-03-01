import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
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
    titleInputWrapper: {
        flexDirection: 'row',
        width: '100%',
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
        borderWidth: 2
    },
    iconChooseWrapper: {
        marginTop: 20,
        padding: 10
    },
    colorChooseWrapper: {
        padding: 10
    },
    iconChooseTitle:{
        fontSize: 16,
        color: colors.white
    },
    iconsList: {
        marginTop: 20,
        width: '100%',
        maxHeight: 300,
        marginBottom: 10
    },
    newIconWrapper: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.whiteBlue,
        borderWidth: 2,
        borderStyle: 'solid'
    },
    listColumnWrapper: {
        justifyContent: 'space-between',
    },
    listContentContainer: {
        rowGap: 40
    },
    createButtonWrapper: {
        padding: 10,
    }
})

export default styles