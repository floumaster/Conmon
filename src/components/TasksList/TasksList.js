import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './TasksList.style'
import Tab from '../Tab'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import colors from '../../constants/colors'
import Tax from '../Icons/Tax'
import Plus from '../Icons/Plus'
import screenNames from '../../constants/screenNames'

const TasksList = ({ navigation }) => {

    const navigateToCreateSpending = () => {
        navigation.navigate(screenNames.SpendingCreate)
    }

    const renderSpendingListItem = ({ item, index }) => {
        return (
            <>
                {
                    index ? (
                        <View style={styles.spendingWrapper}>
                            <Text style={styles.spendingTitle}>LYFT Savings</Text>
                            <Text style={styles.spendingDescription}>Wants Management</Text>
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
                                        () => <Tax width={26} height={26}/>
                                    }
                                </AnimatedCircularProgress>
                                <View style={styles.spendingStatsTextWrapper}>
                                    <Text style={styles.spendingStatsValue}>$29389</Text>
                                    <Text style={styles.spendingStatsText}>Waiting to complete</Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <TouchableOpacity style={styles.spendingWrapperNew} onPress={navigateToCreateSpending}>
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
            data={[0,0,0,0,0,0,0,0,0]}
            renderItem={renderSpendingListItem}
            numColumns={2}
            columnWrapperStyle={styles.listColumnWrapper}
            contentContainerStyle={styles.listContentContainer}
        />
    )
}

const TasksListWrapper = ({ navigation }) => {
    console.log("navigation", navigation)

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
                        Planned
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
            <TasksList navigation={navigation} />
        </Tab>
    )
}

export default TasksListWrapper