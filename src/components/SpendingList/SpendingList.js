import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './SpendingList.style'
import Settings from '../Icons/Settings'
import colors from '../../constants/colors'
import { useSelector } from 'react-redux'

const SpendingList = ({ sections }) => {

    const userInfo = useSelector(store => store.userSlice.user)
    
    return (
        <View style={styles.spendingList}>
            <ScrollView
                scrollEventThrottle={16}
            > 
                {
                    sections.map(section => {
                        const Icon = section.Icon
                        return (
                            <View style={styles.spendingItem}>
                                <View style={styles.spendingTitleWrapper}>
                                    <View style={[styles.spendingItemMark, {backgroundColor: section.color}]}>
                                        <Icon width={25} fill={colors.white}/>
                                    </View>
                                    <Text style={styles.spendingItemTitle}>{section.name}</Text>
                                </View>
                                <View style={styles.spendingItemValueWrapper}>
                                    <Text style={styles.spendingItemPercent}>{section.percentage}%</Text>
                                    <Text style={styles.spendingItemValue}>{section.amount}{userInfo?.currency}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default SpendingList