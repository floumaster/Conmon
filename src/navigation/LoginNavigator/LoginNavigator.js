import React, { useEffect, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import RootNavigator from '../RootNavigator/RootNavigator'
import Login from '../../components/Screens/Login'
import Register from '../../components/Screens/Register'
import { useSelector } from 'react-redux'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const LoginNavigator = (props) => {

    const navigationRef = useRef(null)
    
    const userInfo = useSelector(store => store.userSlice.user)

    useEffect(() => {
        if(userInfo)
            navigationRef.current?.navigate(screenNames.RootNavigator)
        else
            navigationRef.current?.navigate(screenNames.Login)
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