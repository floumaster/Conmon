import React from 'react'
import {
    View,
} from 'react-native'
import styles from './Home.style'
import HomeStats from '../../HomeStats'
import Header from '../../Header'
import TasksList from '../../TasksList'

const Home = ({ navigation }) => {
    return (
        <View style={styles.screenContainer}>
            <Header navigation={navigation}/>
            <HomeStats />
            {/* <TasksList /> */}
        </View>
    )
}



export default Home