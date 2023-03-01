import React from 'react'
import {
    View,
} from 'react-native'
import styles from './Home.style'
import HomeStats from '../../HomeStats'
import Header from '../../Header'
import TasksList from '../../TasksList'

const Home = () => {
    return (
        <View style={styles.screenContainer}>
            <Header />
            <HomeStats />
            {/* <TasksList /> */}
        </View>
    )
}



export default Home