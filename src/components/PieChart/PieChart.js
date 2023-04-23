import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Pie from 'react-native-pie'
import { useSelector } from 'react-redux'

import colors from '../../constants/colors'
import styles from './PieChart.style'

const PIE_CHART_RADIUS = 110
const PIE_CHART_INNER_RADIUS = 85
const PIE_CHART_DIVIDER_SIZE = 1

const PieChart = ({ sections, sum }) => {

    const userInfo = useSelector(store => store.userSlice.user)

    const proccessedSections = sections.length ? sections : [{
        percentage: 100,
        color: colors.textPrimary,
    }]

    return (
        <View style={styles.chartContainer}>
            <Pie
                radius={PIE_CHART_RADIUS}
                innerRadius={PIE_CHART_INNER_RADIUS}
                dividerSize={PIE_CHART_DIVIDER_SIZE}
                backgroundColor={colors.primary}
                sections={proccessedSections}
                strokeCap={'butt'}
                />
                <View style={styles.chartTextWrapper}>
                    <Text style={styles.chartText}>Budget spent</Text>
                    <Text style={styles.mainChartText}>
                        {userInfo?.currency}{sum}
                    </Text>
                    <Text style={styles.chartText}>of {userInfo?.currency}{userInfo?.monthBudget}</Text>
                </View>
        </View>
    )
}

export default PieChart