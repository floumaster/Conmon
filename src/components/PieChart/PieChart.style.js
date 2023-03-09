import { StyleSheet } from 'react-native'
import colors from 'constants/colors'

export default StyleSheet.create({
    chartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
    },
    chartTextWrapper: {
        position: 'absolute',
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
        fontSize: 28,
        fontWeight: 'bold'
    },
})