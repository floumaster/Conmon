import React, { useEffect, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import RootNavigator from '../RootNavigator/RootNavigator'
import Login from '../../components/Screens/Login'
import Register from '../../components/Screens/Register'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../../reduxManager/userSlice'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const LoginNavigator = (props) => {

    const navigationRef = useRef(null)
    const dispatch = useDispatch()
    
    const userInfo = useSelector(store => store.userSlice.user)

    const autoLogin = async () => {
        const userJSON = await AsyncStorage.getItem('userInfo')
        const user = JSON.parse(userJSON)
        if(!userInfo && user)
            dispatch(setUser(user))
        else
            navigationRef.current?.navigate(screenNames.Login)
    }

    useEffect(() => {
        if(userInfo)
            navigationRef.current?.navigate(screenNames.RootNavigator)
        else{
            autoLogin() 
        }
    }, [userInfo])

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name={screenNames.Login} component={Login}/>
                <Stack.Screen name={screenNames.Register} component={Register}/>
                <Stack.Screen name={screenNames.RootNavigator} component={RootNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginNavigator