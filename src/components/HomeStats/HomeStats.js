import React from 'react'
import { View, Text, Animated, ScrollView, useEffect } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addSpending } from '../../redux/spendingsSlice'
import styles from './HomeStats.style'
import PieChart from '../PieChart'
import SpendingList from '../SpendingList'
import Tab from '../Tab'

const HomeStats = () => {

    const spendings = useSelector(store => store.spendings.spendings)

    const getSectionsFromSpendings = () => {
        const sum = spendings.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
        const spendingsWithPercentage = spendings.map(spending => (
            {
                ...spending,
                percentage: Math.round(((spending.amount * 100) / sum) * 10) / 10,
                color: `#${Math.floor(Math.random()*16777215).toString(16)}`
            }
        ))
        return spendingsWithPercentage
    }

    const sections = getSectionsFromSpendings()

    return (
        <Tab style={styles.tabWrapper}>
            <View style={styles.tabHeader}>
                <Text style={styles.welcomeText}>My Sprending for June</Text>
                <Text style={styles.subWelcomeText}>Well done, your budget is on track</Text>
            </View>
            <View style={styles.statsContainer}>
                <PieChart sections={sections} />
                <SpendingList sections={sections} />
            </View>
        </Tab>
    )
}

export default HomeStats