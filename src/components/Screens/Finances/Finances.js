import React from 'react'
import { View } from 'react-native'
import styles from './Finances.style'
import Tab from '../../Tab'
import TasksList from '../../TasksList'

const Finances = () => {
    return (
        <View style={styles.wrapper}>
            <TasksList />
        </View>
    )
}

export default Finances