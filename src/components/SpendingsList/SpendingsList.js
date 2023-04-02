import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import styles from './SpendingsList.style'
import iconMap from '../../utils/iconMap'
import Done from '../Icons/Done'
import Clock from '../Icons/Clock'
import Plus from '../Icons/Plus'
import colors from '../../constants/colors'
import screenNames from '../../constants/screenNames'
import Minus from '../Icons/Minus'

const TasksList = ({
    navigation,
    spendings,
    categories,
    isPlannedSpendingsShown,
    searchedSpendingName,
    isInTemplateList,
    isSpendingSelection,
    spendingsId,
    setSpendingsId,
    isTemplateViewer
}) => {

    const [newSpendingsId, setNewSpendingsId] = useState(spendingsId)


    const searchedSpending = spendings.filter(spending => spending.name.startsWith(searchedSpendingName))

    const processedSpendings = [0, ...searchedSpending]

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

    const navigateToSpendingSelection = () => {
        navigation.navigate(screenNames.SpendingSelection, {
            spendingsId,
            setSpendingsId
        })
    }

    const toggleSpendingSelection = (spendingId) => {
        setNewSpendingsId(newSpendingsId => {
            if(newSpendingsId.includes(spendingId)){
                return newSpendingsId.filter(id => id !== spendingId)
            }
            else return [...newSpendingsId, spendingId]
        })
    }

    const removeSpendingById = (spendingId) => {
        setSpendingsId(newSpendingsId => newSpendingsId.filter(id => id !== spendingId))
    }

    useEffect(() => {
        if(spendingsId && setSpendingsId)
            setSpendingsId(newSpendingsId)
    }, [newSpendingsId])

    const renderSpendingListItem = ({ item, index }) => {
        const comment = item.comment || ''

        const processedComment = comment.length > 20 ? `${comment.slice(0, 15)}...` : comment

        const status = item.isCompleted ? 'Completed' : 'Waiting to complete'

        const Icon = iconMap[categories.find(cat => cat.id === item.categoryId)?.iconName]

        const additionalMarkerWrapperStyle = isInTemplateList ? styles.toRemove
        : isSpendingSelection ?
        (newSpendingsId.includes(item.id) ? styles.done
        : styles.waitingToSelect)
        : (item.isCompleted ? styles.done
        : styles.notDone)

        const Statusicon = isInTemplateList ? Minus
        : isSpendingSelection ? Done
        : item.isCompleted ? Done
        : Clock

        return (
            <>
                {
                    index ? (
                        <TouchableOpacity style={styles.spendingWrapper} onPress={() => {
                            if(isTemplateViewer || (!isInTemplateList && isSpendingSelection))
                                navigateToSpendingInfo(item.id)
                            }}>
                            <View style={styles.spendingTitleWrapper}>
                                <Text style={styles.spendingTitle}>{item.name}</Text>
                                <View style={[styles.markerWrapper, additionalMarkerWrapperStyle]}>
                                    <Statusicon width={18} fill={colors.white} onPress={() => {
                                        if(isSpendingSelection)
                                            toggleSpendingSelection(item.id)
                                        if(isInTemplateList)
                                            removeSpendingById(item.id)
                                    }}/>
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
                        </TouchableOpacity>
                    ) : (
                        !isTemplateViewer &&
                        <TouchableOpacity
                            style={styles.spendingWrapperNew}
                            onPress={
                                isInTemplateList ?
                                navigateToSpendingSelection
                                : () => navigateToCreateSpending(isPlannedSpendingsShown)
                            }>
                            <Text style={styles.spendingTitle}>{isInTemplateList ? 'Add spending' : 'Add new spending'}</Text>
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

export default TasksList