import React from 'react'
import { View } from 'react-native'
import styles from './Tab.style'

const Tab = ({children}) => {
    return (
        <View style={styles.tab}>
            {children}
        </View>
    )
}

export default Tab