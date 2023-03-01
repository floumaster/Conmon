import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './SpendingList.style'
import Settings from '../Icons/Settings'

const SpendingList = ({ sections }) => {
    
    return (
        <View style={styles.spendingList}>
            <ScrollView
                scrollEventThrottle={16}
            > 
                {
                    sections.map(section => {
                        return (
                            <View style={styles.spendingItem}>
                                <View style={styles.spendingTitleWrapper}>
                                    <View style={[styles.spendingItemMark, {backgroundColor: section.color}]}>
                                        <Settings width={25}/>
                                    </View>
                                    <Text style={styles.spendingItemTitle}>{section.name}</Text>
                                </View>
                                <View style={styles.spendingItemValueWrapper}>
                                    <Text style={styles.spendingItemPercent}>{section.percentage}%</Text>
                                    <Text style={styles.spendingItemValue}>{section.amount}$</Text>
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