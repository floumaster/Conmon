import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Templates from '../../components/Screens/Templates'
import TemplateCreate from '../../components/Screens/TemplateCreate'
import SpendingSelection from '../../components/Screens/SpendingSelection'
import SpendingCreate from '../../components/Screens/SpendingCreate'
import TemplateViewer from '../../components/Screens/TemplateViewer'
import Spending from '../../components/Screens/Spending/Spending'

import screenNames from '../../constants/screenNames'

const Stack = createNativeStackNavigator()

const TemplatesNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={screenNames.Templates} component={Templates}/>
            <Stack.Screen name={screenNames.TemplateCreate} component={TemplateCreate}/>
            <Stack.Screen name={screenNames.SpendingSelection} component={SpendingSelection}/>
            <Stack.Screen name={screenNames.Spending} component={Spending}/>
            <Stack.Screen name={screenNames.SpendingCreate} component={SpendingCreate}/>
            <Stack.Screen name={screenNames.TemplateViewer} component={TemplateViewer}/>
        </Stack.Navigator>
    )
}

export default TemplatesNavigator