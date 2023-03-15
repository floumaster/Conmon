import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Finances from '../../components/Screens/Spendings'
import SpendingCreate from '../../components/Screens/SpendingCreate'
import CategoryNavigator from '../CategoryNavigator'
import Spending from '../../components/Screens/Spending'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const SpendingNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={screenNames.Spendings} component={Finances}/>
            <Stack.Screen name={screenNames.SpendingCreate} component={SpendingCreate} />
            <Stack.Screen name={screenNames.Spending} component={Spending} />
            <Stack.Screen name={screenNames.CategoriesSubStack} component={CategoryNavigator} />
        </Stack.Navigator>
    )
}

export default SpendingNavigator