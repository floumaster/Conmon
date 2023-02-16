import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    spendingItemMark: {
        top: 4,
        width: 12,
        height: 12,
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    spendingItemSubMark: {
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: colors.primary,
    },
    spendingItem: {
        flexDirection: 'row',
        marginBottom: 20
    },
    spendingList: {
        paddingTop: 30,
        paddingLeft: 30,
        height: 250,
    },
    spendingItemName: {
        color: colors.subText,
        fontWeight: 'bold',
        fontSize: 12
    },
    spendingItemValue: {
        color: colors.subText,
        fontSize: 10
    }
})