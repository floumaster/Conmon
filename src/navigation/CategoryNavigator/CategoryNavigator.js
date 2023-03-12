import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Categories from '../../components/Screens/Categories'
import CategoryCreate from '../../components/Screens/CategoryCreate'
import ColorPicker from '../../components/Screens/ColorPicker'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const CategoryNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={screenNames.Categories} component={Categories}/>
            <Stack.Screen name={screenNames.CategoryCreate} component={CategoryCreate}/>
            <Stack.Screen name={screenNames.ColorPicker} component={ColorPicker}/>
        </Stack.Navigator>
    )
}

export default CategoryNavigator