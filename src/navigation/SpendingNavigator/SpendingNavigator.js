import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Finances from '../../components/Screens/Spendings'
import SpendingCreate from '../../components/Screens/SpendingCreate'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const CategoryNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={screenNames.Spendings} component={Finances}/>
            <Stack.Screen name={screenNames.SpendingCreate} component={SpendingCreate} />
        </Stack.Navigator>
    )
}

export default CategoryNavigator