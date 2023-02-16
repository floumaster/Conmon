import React from 'react'
import { View, Text } from 'react-native'
import Pie from 'react-native-pie'
import colors from '../../constants/colors'
import styles from './PieChart.style'

const PieChart = () => {
    return (
        <View style={styles.chartContainer}>
            <Pie
                radius={110}
                innerRadius={90}
                dividerSize={1}
                backgroundColor={colors.primary}
                sections={[
                    {
                    percentage: 10,
                    color: '#C70039',
                    },
                    {
                    percentage: 20,
                    color: '#44CD40',
                    },
                    {
                    percentage: 30,
                    color: '#404FCD',
                    },
                    {
                    percentage: 40,
                    color: '#EBD22F',
                    },
                ]}
                strokeCap={'butt'}
                />
                <View style={styles.chartTextWrapper}>
                    <Text style={styles.chartText}>Budget spent</Text>
                    <Text style={styles.mainChartText}>
                        $4,200
                    </Text>
                    <Text style={styles.chartText}>of $5,000</Text>
                </View>
        </View>
    )
}

export default PieChart