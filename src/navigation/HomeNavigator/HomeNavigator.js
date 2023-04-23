import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../components/Screens/Home'
import Account from '../../components/Screens/Account'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={screenNames.Home} component={Home}/>
            <Stack.Screen name={screenNames.Account} component={Account}/>
        </Stack.Navigator>
    )
}

export default HomeNavigator