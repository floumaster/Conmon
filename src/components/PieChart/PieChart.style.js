import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    chartContainer: {
        marginTop: 30,
    },
    chartTextWrapper: {
        position: 'absolute',
        top: 50,
        left: 60,
        width: 100,
        alignItems: 'center',
    },
    chartText: {
        color: colors.subText,
        fontSize: 14,
        marginTop: 10,
    },
    mainChartText: {
        marginTop: 10,
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold'
    },
})