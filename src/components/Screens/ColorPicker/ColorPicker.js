import React from 'react'
import { View, Text } from 'react-native'
import styles from './ColorPicker.style'
import Tab from '../../Tab'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'
import PrimaryButton from '../../Buttons/PrimaryButton'

const ColorPickerScreen = ({navigation, route}) => {

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Pick a color"
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
                style={{flex: 1, alignItems: 'center'}}
            >
                <ColorPicker style={{height: 300, width: 300}} onColorSelected={color => {
                    route.params.setCategoryColor(color)
                }}/>
            </Tab>
        </View>
    )
}

export default ColorPickerScreen