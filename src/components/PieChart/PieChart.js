import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Pie from 'react-native-pie'

import colors from '../../constants/colors'
import styles from './PieChart.style'

const PIE_CHART_RADIUS = 110
const PIE_CHART_INNER_RADIUS = 85
const PIE_CHART_DIVIDER_SIZE = 1

const PieChart = ({ sections, sum }) => {

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
                        ${sum}
                    </Text>
                    <Text style={styles.chartText}>of $5,000</Text>
                </View>
        </View>
    )
}

export default PieChart