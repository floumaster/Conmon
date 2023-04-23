import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1,
        padding: 10,
        paddingBottom: 49.5
    }, 
    categoriesList: {
        height: '100%',
        width: '100%'
    },
    listColumnWrapper: {
        justifyContent: 'space-between',
    },
    listContentContainer: {
        rowGap: 12
    },
    category: {
        width: 95,
        height: 95,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.textPrimary,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    },
    iconWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.textPrimary,
        borderStyle: 'solid'
    },
    categoryTitle: {
        fontSize: 16,
        marginTop: 3,
        color: colors.textPrimary,
        fontWeight: 'bold',
    }
})

export default styles