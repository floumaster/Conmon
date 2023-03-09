import React from 'react'
import { View } from 'react-native'
import styles from './Spendings.style'
import Tab from '../../Tab'
import TasksList from '../../TasksList'

const Finances = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <TasksList navigation={navigation} />
        </View>
    )
}

export default Finances