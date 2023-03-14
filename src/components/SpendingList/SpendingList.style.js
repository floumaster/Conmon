import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    spendingItemMark: {
        width: 42,
        height: 42,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.white,
    },
    spendingItem: {
        flexDirection: 'row',
        marginBottom: 20
    },
    spendingList: {
        paddingTop: 10,
        paddingLeft: 30,
        height: '45%',
    },
    spendingTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%'
    },
    spendingItemTitle: {
        fontSize: 16,
        color: colors.white,
        marginLeft: 10
    },
    spendingItemValueWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%'
    },
    spendingItemPercent: {
        width: 50,
        fontSize: 16,
        color: colors.white,
    },
    spendingItemValue: {
        fontSize: 16,
        color: colors.subText,
    },
})