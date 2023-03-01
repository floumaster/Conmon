import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    tab: {
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 20,
    },
    screenTitle: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        
    }, 
    screenHeader: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        height: 20
    },
    sideIconWrapper: {
        width: '20%'
    }
})