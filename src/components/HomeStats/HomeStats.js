import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './HomeStats.style'
import PieChart from '../PieChart'
import SpendingList from '../SpendingList'
import Tab from '../Tab'
import iconMap from '../../utils/iconMap'
import moment from 'moment'
import colors from '../../constants/colors'

const HomeStats = () => {

    const spendings = useSelector(store => store.spendings?.spendings)
    .filter(spending => spending.isCompleted && moment().startOf('month') < moment(spending.completionDate))
    const categories = useSelector(store => store.categories?.categories)

    const sum = spendings.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)

    const getSectionsFromSpendings = () => {
        const spendingsWithPercentage = spendings.map(spending => (
            {
                ...spending,
                percentage: Math.round(((spending.amount * 100) / sum) * 10) / 10,
                color: categories.find(cat => cat.id === spending.categoryId).color,
                Icon: iconMap[categories.find(cat => cat.id === spending.categoryId).iconName]
            }
        ))
        return spendingsWithPercentage
    }

    const sections = getSectionsFromSpendings()

    const currentMonth = moment().format('MMMM')

    return (
        <Tab style={styles.tabWrapper}>
            <View style={styles.tabHeader}>
                <Text style={styles.welcomeText}>My Sprending for {currentMonth}</Text>
                <Text style={styles.subWelcomeText}>Well done, your budget is on track</Text>
            </View>
            <View style={styles.statsContainer}>
                <PieChart sections={sections} sum={sum}/>
                <SpendingList sections={sections} />
            </View>
        </Tab>
    )
}

export default HomeStats