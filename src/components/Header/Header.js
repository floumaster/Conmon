import React from 'react';
import { View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import styles from './Header.style'
import Tab from '../Tab';
import Cap from '../Icons/Cap';
import Settings from '../Icons/Settings';
import { useSelector } from 'react-redux';
import screenNames from '../../constants/screenNames';



const Header = ({ navigation }) => {

    const userInfo = useSelector(store => store.userSlice.user)

    const handleAccountOpen = () => {
        navigation.navigate(screenNames.Account)
    }

    return (
        <Tab>
            <View style={styles.contentWrapper}>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name}>Conmon</Text>
                </View>
                <View style={styles.iconsWrapper}>
                    <Settings width={20} onPress={handleAccountOpen}/>
                </View>
            </View>
            <View style={styles.profileWrapper}>
                <AnimatedCircularProgress
                    size={50}
                    width={3}
                    fill={100}
                    prefill={50}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                >
                    {
                        () => <Cap width={35} style={styles.profileIcon} onPress={() => {}}/>
                    }
                </AnimatedCircularProgress>
                <View style={styles.profileInfoWrapper}>
                    <Text style={styles.profileName}>Welcome back, {userInfo?.name} {userInfo?.surname}</Text>
                    <Text style={styles.profileProgress}>Control your money</Text>
                </View>
            </View>
        </Tab>
    )
}

export default Header
