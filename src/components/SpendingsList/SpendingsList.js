import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { useSelector } from 'react-redux'

import styles from './SpendingsList.style'
import iconMap from '../../utils/iconMap'
import Done from '../Icons/Done'
import Clock from '../Icons/Clock'
import Plus from '../Icons/Plus'
import colors from '../../constants/colors'
import screenNames from '../../constants/screenNames'

const TasksList = ({
    navigation,
    spendings,
    categories,
    isPlannedSpendingsShown,
    searchedSpendingName,
}) => {

    const userInfo = useSelector(store => store.userSlice.user)

    const searchedSpending = spendings.filter(spending => spending.name.startsWith(searchedSpendingName))

    const processedSpendings = []
    let bufArr = [0]
    searchedSpending.forEach(spending => {
        bufArr.push(spending)
        if(bufArr.length === 2){
            processedSpendings.push(bufArr)
            bufArr = []
        }
    });
    if(bufArr.length === 1){
        processedSpendings.push(bufArr)
        bufArr = []
    }

    const navigateToCreateSpending = (isSpendingScheduled) => {
        navigation.navigate(screenNames.SpendingCreate, {
            isSpendingScheduled
        })
    }

    const navigateToSpendingInfo = (spendingId) => {
        navigation.navigate(screenNames.Spending, {
            spendingId
        })
    }

    return (
        <ScrollView style={styles.spendingsWrapper}>
            {
                processedSpendings.map(spendingPair => {
                    
                    return (
                        <View style={styles.spendingsRowWrapper}>
                            {
                                spendingPair.map(spending => {
                                    const comment = spending.comment || ''

                                    const processedComment = comment.length > 20 ? `${comment.slice(0, 15)}...` : comment

                                    const status = spending.isCompleted ? 'Completed' : 'Waiting to complete'

                                    const Icon = iconMap[categories.find(cat => cat.id === spending.categoryId)?.iconName]

                                    const additionalMarkerWrapperStyle = (spending.isCompleted ? styles.done : styles.notDone)

                                    const Statusicon = spending.isCompleted ? Done : Clock

                                    if(spending === 0){
                                        return (
                                            <TouchableOpacity
                                                style={styles.spendingWrapperNew}
                                                onPress={() => navigateToCreateSpending(isPlannedSpendingsShown)}>
                                                <Text style={styles.spendingTitle}>Add new spending</Text>
                                                <View style={styles.newSpendingButtonWrapper}>
                                                    <Plus fill={colors.white}/>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    else{
                                        return (
                                            <TouchableOpacity style={styles.spendingWrapper} onPress={() => {navigateToSpendingInfo(spending.id)}}>
                                                <View style={styles.spendingTitleWrapper}>
                                                    <Text style={styles.spendingTitle}>{spending.name}</Text>
                                                    <View style={[styles.markerWrapper, additionalMarkerWrapperStyle]}>
                                                        <Statusicon width={18} fill={colors.white} />
                                                    </View>
                                                </View>
                                                <Text style={styles.spendingDescription}>{processedComment}</Text>
                                                <View style={styles.spendingStatsWrapper}>
                                                    <AnimatedCircularProgress
                                                        size={50}
                                                        width={3}
                                                        fill={100}
                                                        prefill={50}
                                                        tintColor={colors.whiteBlue}
                                                        backgroundColor="#3d5875"
                                                    >
                                                        {
                                                            () => <Icon width={26} height={26} fill={colors.white}/>
                                                        }
                                                    </AnimatedCircularProgress>
                                                    <View style={styles.spendingStatsTextWrapper}>
                                                        <Text style={styles.spendingStatsValue}>{userInfo?.currency}{spending.amount}</Text>
                                                        <Text style={styles.spendingStatsText}>{status}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                })
                            }
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default TasksList