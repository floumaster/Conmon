import React from 'react'
import {
    View,
} from 'react-native'
import styles from './Home.style'
import HomeStats from '../../HomeStats'
import Header from '../../Header'

const Home = () => {
    return (
        <View style={styles.screenContainer}>
            <Header />
            <HomeStats />
        </View>
    )
}



export default Home