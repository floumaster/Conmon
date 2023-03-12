import React from 'react'
import { View } from 'react-native'
import styles from './Spendings.style'
import TasksList from '../../TasksList'

const Spending = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <TasksList navigation={navigation} />
        </View>
    )
}

export default Spending