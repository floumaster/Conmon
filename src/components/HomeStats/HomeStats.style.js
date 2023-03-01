import { StyleSheet } from 'react-native'
import colors from './../../constants/colors'

export default StyleSheet.create({
    statsContainer: {
        justifyContent: 'center',
        
    },
    tabHeader: {
        alignItems: 'center',
    },
    welcomeText: {
        color: colors.textPrimary,
        fontSize: 16
    },
    subWelcomeText: {
        color: colors.subText,
        fontSize: 12
    },
    tabWrapper: {
        flex: 1
    }
})