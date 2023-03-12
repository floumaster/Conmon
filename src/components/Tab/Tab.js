import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './Tab.style'
import BackArrow from '../Icons/BackArrow'
import colors from '../../constants/colors'

const Tab = ({children, style, headerTitle, HeaderIconLeft, HeaderIconRight, isScrollable}) => {
    return (
        <>
        {
            isScrollable ? (
                <ScrollView style={[styles.tab, style]}>
                    {!!headerTitle && <View style={styles.screenHeader}>
                        <View style={styles.sideIconWrapper}>
                            {!!HeaderIconLeft && <HeaderIconLeft />}
                        </View>
                        <Text style={styles.screenTitle}>{headerTitle}</Text>
                        <View style={styles.sideIconWrapper}>
                            {!!HeaderIconRight && <HeaderIconRight />}
                        </View>
                    </View>}
                    {children}
                </ScrollView>
            ) : (
                <View style={[styles.tab, style]}>
                    {!!headerTitle && <View style={styles.screenHeader}>
                        <View style={styles.sideIconWrapper}>
                            {!!HeaderIconLeft && <HeaderIconLeft />}
                        </View>
                        <Text style={styles.screenTitle}>{headerTitle}</Text>
                        <View style={styles.sideIconWrapper}>
                            {!!HeaderIconRight && <HeaderIconRight />}
                        </View>
                    </View>}
                    {children}
                </View>
            )
        }
        </>
    )
}

export default Tab