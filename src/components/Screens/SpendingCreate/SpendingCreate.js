import React, { useState } from 'react'
import { View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'

import Tab from '../../Tab'
import styles from './SpendingCreate.style'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import PrimaryButton from '../../Buttons/PrimaryButton'
import Input from '../../Input'
import DropDown from '../../DropDown'
import Money from '../../Icons/Money'
import Categories from '../../Icons/Categories'
import screenNames from '../../../constants/screenNames'

const data = [
    {key:'1', value:'Once a day'},
    {key:'2', value:'Every day'},
    {key:'3', value:'Every week'},
    {key:'5', value:'Every two weeks'},
    {key:'6', value:'Every month'},
    {key:'7', value:'Every 3 months'},
    {key:'7', value:'Every year'},
]

const SpendingCreate = ({ navigation, route }) => {

    const [spendingTitle, setSpendingTitle] = useState('')
    const [spendingAmount, setSpendingAmount] = useState(0)
    const [spendingComment, setSpendingComment] = useState('')
    const [recurrence, setRecurrence] = useState('')
    const [date, setDate] = useState(new Date());
    const [isDatePickerOpened, setIsDatePickerOpened] = useState(false)
    const [pickerMode, setPickerMode] = useState('date')

    const spendingInfo = route?.params?.spendingInfo

    const toggleDateModal = () => {
        setPickerMode('date')
        setIsDatePickerOpened(isDatePickerOpened => !isDatePickerOpened)
    }

    const toggleTimeModal = () => {
        setPickerMode('time')
        setIsDatePickerOpened(isDatePickerOpened => !isDatePickerOpened)
    }

    const navigateToCategoryList = () => {
        navigation.navigate(screenNames.Categories)
    }

    return (
        
        <View style={styles.wrapper}>
            <Tab
                headerTitle={spendingInfo ? "Edit the spending" : "Create a new scheduled spending"}
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
                isScrollable
            >
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Set name of spending</Text>
                    <Input value={spendingTitle} setValue={setSpendingTitle} placeholder="Spending name"/>
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Set amount of spending</Text>
                    <Input
                        value={spendingAmount}
                        setValue={setSpendingAmount}
                        placeholder="Spending amount"
                        Icon={() => <Money fill={colors.textPrimary} width={18}/>}
                    />
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Set comment of spending</Text>
                    <Input
                        value={spendingComment}
                        setValue={setSpendingComment}
                        placeholder="Spending comment"
                        Icon={() => <Categories fill={colors.textPrimary} width={18}/>}
                    />
                </View>
                <PrimaryButton text="Chose a category" onPress={navigateToCategoryList}/>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Pick notifications frequency</Text>
                    <DropDown value={data} setValue={setRecurrence} placeholder="Frequency"/>
                </View>
                <PrimaryButton text="Set date of notification start" onPress={toggleDateModal}/>
                <PrimaryButton text="Set time of notification" onPress={toggleTimeModal}/>
                <PrimaryButton
                    text={spendingInfo ? "Edit spending" : "Create spending"}
                    onPress={() => {}}
                    disabled={true}
                />
            </Tab>
            <DatePicker
                mode={pickerMode}
                modal
                open={isDatePickerOpened}
                date={date}
                onConfirm={(date) => {
                    setIsDatePickerOpened(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setIsDatePickerOpened(false)
                }}
            />
        </View>
    )
}

export default SpendingCreate