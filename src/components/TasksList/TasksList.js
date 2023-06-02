import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './TasksList.style'
import Tab from '../Tab'
import colors from '../../constants/colors'
import Filter from '../Icons/Filter'
import Input from '../Input'
import Sort from '../Icons/Sort'
import { sortSpendingsByCriteriaName } from '../../utils/sorting';
import FilterModal from '../Modals/BottomSheets/FilterModal'
import SortingModal from '../Modals/BottomSheets/SortingModal'
import { filterSpendingsWithParams } from '../../utils/filtering'
import SpendingsList from '../SpendingsList'

const TasksListWrapper = ({ navigation, isCoreScreen }) => {

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

    const unplannedSpendings = sortSpendingsByCriteriaName(filterSpendingsWithParams(spendings.filter(spending => !spending.isScheduled), isCompletedShown,
    isNotCompletedShown,
    startDate,
    endDate,
    multiAmountValue), sortingType)

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
                <SpendingsList
                    navigation={navigation}
                    spendings={isPlannedSpendingsShown ? scheduledSpendings : unplannedSpendings}
                    categories={categories}
                    isPlannedSpendingsShown={isPlannedSpendingsShown}
                    searchedSpendingName={searchedSpendingName}
                    isCoreScreen={isCoreScreen}
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