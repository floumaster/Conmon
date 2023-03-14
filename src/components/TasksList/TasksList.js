import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './TasksList.style'
import Tab from '../Tab'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import colors from '../../constants/colors'
import Tax from '../Icons/Tax'
import Plus from '../Icons/Plus'
import screenNames from '../../constants/screenNames'
import iconMap from '../../utils/iconMap'
import Done from '../Icons/Done'
import Clock from '../Icons/Clock'
import Input from '../Input'

const TasksList = ({ navigation, spendings, categories, isPlannedSpendingsShown }) => {

    const processedSpendings = [0, ...spendings]

    const navigateToCreateSpending = (isSpendingScheduled) => {
        navigation.navigate(screenNames.SpendingCreate, {
            isSpendingScheduled
        })
    }

    const renderSpendingListItem = ({ item, index }) => {
        const comment = item.comment || ''

        const processedComment = comment.length > 20 ? `${comment.slice(0, 20)}...` : comment

        const status = item.isCompleted ? 'Completed' : 'Waiting to complete'

        const Icon = iconMap[categories.find(cat => cat.id === item.categoryId)?.iconName]

        const additionalMarkerWrapperStyle = item.isCompleted ? styles.done : styles.notDone

        const Statusicon = item.isCompleted ? Done : Clock

        return (
            <>
                {
                    index ? (
                        <View style={styles.spendingWrapper}>
                            <View style={styles.spendingTitleWrapper}>
                                <Text style={styles.spendingTitle}>{item.name}</Text>
                                <View style={[styles.markerWrapper, additionalMarkerWrapperStyle]}>
                                    <Statusicon width={18} fill={colors.white}/>
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
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#3d5875"
                                >
                                    {
                                        () => <Icon width={26} height={26} fill={colors.white}/>
                                    }
                                </AnimatedCircularProgress>
                                <View style={styles.spendingStatsTextWrapper}>
                                    <Text style={styles.spendingStatsValue}>${item.amount}</Text>
                                    <Text style={styles.spendingStatsText}>{status}</Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <TouchableOpacity style={styles.spendingWrapperNew} onPress={() => navigateToCreateSpending(isPlannedSpendingsShown)}>
                            <Text style={styles.spendingTitle}>Add new spending</Text>
                            <View style={styles.newSpendingButtonWrapper}>
                                <Plus fill={colors.white}/>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </>
        )
    }

    return (
        <FlatList style={styles.spendingList}
            data={processedSpendings}
            renderItem={renderSpendingListItem}
            numColumns={2}
            columnWrapperStyle={styles.listColumnWrapper}
            contentContainerStyle={styles.listContentContainer}
        />
    )
}

const TasksListWrapper = ({ navigation }) => {

    const spendings = useSelector(store => store.spendings.spendings)

    const categories = useSelector(store => store.categories.categories)

    const scheduledSpendings = spendings.filter(spending => spending.isScheduled)

    const unplannedSpendings = spendings.filter(spending => !spending.isScheduled)

    const [isPlannedSpendingsShown, setIsPlannedSpendingsShown] = useState(true)

    const showPlannedSpendings = () => setIsPlannedSpendingsShown(true)

    const showUnplannedSpendings = () => setIsPlannedSpendingsShown(false)

    return (
        <Tab style={{flex: 1}} headerTitle="Your spendings">
            <View style={styles.header}>
                <TouchableOpacity
                    style={ isPlannedSpendingsShown ? styles.titleWrapperActive : styles.titleWrapper }
                    onPress={showPlannedSpendings}
                >
                    <Text
                        style={ isPlannedSpendingsShown ? styles.titleActive : styles.title }
                    >
                        Scheduled
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ isPlannedSpendingsShown ? styles.titleWrapper : styles.titleWrapperActive }
                    onPress={showUnplannedSpendings}
                >
                    <Text
                        style={ isPlannedSpendingsShown ? styles.title : styles.titleActive }
                    >
                        Unplanned
                    </Text>
                </TouchableOpacity>
            </View>
            <Input />
            <TasksList
                navigation={navigation}
                spendings={isPlannedSpendingsShown ? scheduledSpendings : unplannedSpendings}
                categories={categories}
                isPlannedSpendingsShown={isPlannedSpendingsShown}
            />
        </Tab>
    )
}

export default TasksListWrapper