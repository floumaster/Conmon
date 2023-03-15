import React, { useState, useMemo, useRef } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './TasksList.style'
import Tab from '../Tab'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import colors from '../../constants/colors'
import Filter from '../Icons/Filter'
import Plus from '../Icons/Plus'
import screenNames from '../../constants/screenNames'
import iconMap from '../../utils/iconMap'
import Done from '../Icons/Done'
import Clock from '../Icons/Clock'
import Input from '../Input'
import Sort from '../Icons/Sort'
import { sortSpendingsByCriteriaName } from '../../utils/sorting';
import FilterModal from '../Modals/BottomSheets/FilterModal'
import SortingModal from '../Modals/BottomSheets/SortingModal'
import { filterSpendingsWithParams } from '../../utils/filtering'

const TasksList = ({ navigation, spendings, categories, isPlannedSpendingsShown, searchedSpendingName }) => {

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
                        <TouchableOpacity style={styles.spendingWrapper} onPress={() => navigateToSpendingInfo(item.id)}>
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
                        </TouchableOpacity>
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

    const [searchedSpendingName, setSearchedSpendingName] = useState('')
    const [isCompletedShown, setIsCompletedShown] = useState(true)
    const [isNotCompletedShown, setIsNotCompletedShown] = useState(true)
    const [startDate, setStartDate] = useState(new Date((new Date).setMonth((new Date).getMonth()-1)))
    const [endDate, setEndDate] = useState(new Date())
    const [multiAmountValue, setMultiAmountValue] = React.useState([0, 5000]);

    const filterSheetRef = useRef(null);
    const sortingSheetRef = useRef(null);

    const [sortingType, setSortingType] = useState(null)

    const spendings = useSelector(store => store.spendings.spendings) || []

    const categories = useSelector(store => store.categories.categories)

    const scheduledSpendings = sortSpendingsByCriteriaName(
        filterSpendingsWithParams(spendings.filter(spending => spending.isScheduled),
        isCompletedShown,
        isNotCompletedShown,
        startDate,
        endDate,
        multiAmountValue),
        sortingType)

    const unplannedSpendings = sortSpendingsByCriteriaName(spendings.filter(spending => !spending.isScheduled), sortingType)

    const [isPlannedSpendingsShown, setIsPlannedSpendingsShown] = useState(true)

    const showPlannedSpendings = () => setIsPlannedSpendingsShown(true)

    const showUnplannedSpendings = () => setIsPlannedSpendingsShown(false)

    const openFilter = () => {
        filterSheetRef.current.expand()
    }

    const openSorting = () => {
        sortingSheetRef.current.expand()
    }

    return (
        <>
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
                <View style={styles.sortBar}>
                    <Input
                        styleWrapper={styles.inputWrapper}
                        inputWrapperStyle={styles.inputWrapperStyle}
                        Icon={null}
                        placeholder="Search"
                        setValue={setSearchedSpendingName}
                    />
                    <TouchableOpacity style={styles.filterIconWrapper} onPress={openSorting}>
                        <Sort fill={colors.white} width={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterIconWrapper} onPress={openFilter}>
                        <Filter fill={colors.white} width={30} />
                    </TouchableOpacity>
                </View>
                <TasksList
                    navigation={navigation}
                    spendings={isPlannedSpendingsShown ? scheduledSpendings : unplannedSpendings}
                    categories={categories}
                    isPlannedSpendingsShown={isPlannedSpendingsShown}
                    searchedSpendingName={searchedSpendingName}
                />
                <FilterModal
                    reference={filterSheetRef}
                    isCompletedShown={isCompletedShown}
                    setIsCompletedShown={setIsCompletedShown}
                    isNotCompletedShown={isNotCompletedShown}
                    setIsNotCompletedShown={setIsNotCompletedShown}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    multiAmountValue={multiAmountValue}
                    setMultiAmountValue={setMultiAmountValue}
                />
                <SortingModal
                    reference={sortingSheetRef}
                    setSortingType={setSortingType}
                />
            </Tab>
        </>
    )
}

export default TasksListWrapper