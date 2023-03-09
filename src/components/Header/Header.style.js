import { StyleSheet } from 'react-native'
import colors from 'constants/colors'

export default StyleSheet.create({
    contentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    nameWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconsWrapper: {
        left: 15,
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
    },
    profileWrapper: {
        flexDirection: 'row',
        columnGap: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    badgeWrapper: {

    },
    profileInfoWrapper: {

    },
    profileName: {
        color: colors.textPrimary,
        fontWeight: 'bold'
    },
    profileProgress: {
        color: colors.subText
    },
    badgeWrapper: {
        width: 50,
        height: 50,
        backgroundColor: colors.background,
        borderRadius: 50,
    },
    profileIcon: {
        marginTop: 5,
    }
})