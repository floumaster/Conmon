import { StyleSheet } from 'react-native'
import colors from './../../constants/colors'

export default StyleSheet.create({
    statsContainer: {
        flexDirection: 'row'
    },
    tabHeader: {
        alignItems: 'center'
    },
    welcomeText: {
        color: colors.textPrimary,
        fontSize: 16
    },
    subWelcomeText: {
        color: colors.subText,
        fontSize: 12
    },
})