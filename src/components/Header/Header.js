import React from 'react';
import { View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import styles from './Header.style'
import Tab from 'components/Tab';
import Cap from 'components/Icons/Cap';
import Settings from 'components/Icons/Settings';
import Bell from 'components/Icons/Bell';



const Header = () => {
    return (
        <Tab>
            <View style={styles.contentWrapper}>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name}>Conmon</Text>
                </View>
                <View style={styles.iconsWrapper}>
                    <Bell width={20} onPress={() => {}}/>
                    <Settings width={20} onPress={() => {}}/>
                </View>
            </View>
            <View style={styles.profileWrapper}>
                <AnimatedCircularProgress
                    size={50}
                    width={3}
                    fill={100}
                    prefill={50}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875"
                >
                    {
                        () => <Cap width={35} style={styles.profileIcon} onPress={() => {}}/>
                    }
                </AnimatedCircularProgress>
                <View style={styles.profileInfoWrapper}>
                    <Text style={styles.profileName}>Welcome back, Nikola Covac</Text>
                    <Text style={styles.profileProgress}>Control your money</Text>
                </View>
            </View>
        </Tab>
    )
}

export default Header
