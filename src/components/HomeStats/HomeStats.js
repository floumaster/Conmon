import React from 'react'
import { View, Text } from 'react-native'
import styles from './HomeStats.style'
import PieChart from '../PieChart'
import SpendingList from '../SpendingList'
import Tab from '../Tab'

const HomeStats = () => {
    return (
        <Tab>
            <View style={styles.tabHeader}>
                <Text style={styles.welcomeText}>My Sprending for June</Text>
                <Text style={styles.subWelcomeText}>Well done, your budget is on track</Text>
            </View>
            <View style={styles.statsContainer}>
                <PieChart />
                <SpendingList />
            </View>
        </Tab>
    )
}

export default HomeStats