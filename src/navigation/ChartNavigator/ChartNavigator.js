import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Spending from '../../components/Screens/Spending'
import Charts from '../../components/Screens/Charts/Charts'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const ChartNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={screenNames.Charts} component={Charts}/>
            <Stack.Screen name={screenNames.Spending} component={Spending}/>
        </Stack.Navigator>
    )
}

export default ChartNavigator