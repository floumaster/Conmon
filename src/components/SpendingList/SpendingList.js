import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './SpendingList.style'

const SpendingList = () => {
    return (
        <View style={styles.spendingList}>
            <ScrollView showsVerticalScrollIndicator={false}> 
                {
                    [0,0,0,0,0,0,0,0,0,0].map(el => {
                        return (
                            <View style={styles.spendingItem}>
                                <View style={styles.spendingItemMark}>
                                    <View style={styles.spendingItemSubMark}/>
                                </View>
                                <View style={styles.spendingItemTextContainer}>
                                    <Text style={styles.spendingItemName}>Taxes</Text>
                                    <Text style={styles.spendingItemValue}>$200</Text>
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