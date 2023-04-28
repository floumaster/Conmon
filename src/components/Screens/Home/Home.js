import React, { useEffect } from 'react'
import {
    View,
} from 'react-native'
import styles from './Home.style'
import HomeStats from '../../HomeStats'
import Header from '../../Header'
import TasksList from '../../TasksList'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../../reduxManager/categorySlice'
import { getSpendings } from '../../../reduxManager/spendingsSlice'
import { getTemplates } from '../../../reduxManager/templateSlice'

const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    const userInfo = useSelector(store => store.userSlice.user)

    useEffect(() => {
        if(userInfo){
            dispatch(getCategories({
                userId: userInfo.id
            }))
            dispatch(getSpendings({
                userId: userInfo.id
            }))
            dispatch(getTemplates({
                userId: userInfo.id
            }))
        }
    }, [userInfo])

    return (
        <View style={styles.screenContainer}>
            <Header navigation={navigation}/>
            <HomeStats />
            {/* <TasksList /> */}
        </View>
    )
}



export default Home