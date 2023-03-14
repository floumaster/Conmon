import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';

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
import notificationFrequency from '../../../constants/notificationFrequency'
import { addSpending } from '../../../reduxManager/spendingsSlice'

const SpendingCreate = ({ navigation, route }) => {

    const [spendingTitle, setSpendingTitle] = useState('')
    const [spendingAmount, setSpendingAmount] = useState(0)
    const [spendingComment, setSpendingComment] = useState('')
    const [recurrence, setRecurrence] = useState('')
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [categoryId, setCategoryId] = useState('')
    const [isDatePickerOpened, setIsDatePickerOpened] = useState(false)
    const [pickerMode, setPickerMode] = useState('date')

    const dispatch = useDispatch()

    const spendingInfo = route?.params?.spendingInfo
    const isSpendingScheduled = route?.params?.isSpendingScheduled

    const isCreateButtonEnabled = isSpendingScheduled ? 
        (
            spendingTitle.length &&
            spendingAmount &&
            spendingComment.length &&
            categoryId.length &&
            recurrence.length
        ) : (
            spendingTitle.length &&
            spendingAmount &&
            spendingComment.length &&
            categoryId.length
        )

    const toggleDateModal = () => {
        setPickerMode('date')
        setIsDatePickerOpened(isDatePickerOpened => !isDatePickerOpened)
    }

    const toggleTimeModal = () => {
        setPickerMode('time')
        setIsDatePickerOpened(isDatePickerOpened => !isDatePickerOpened)
    }

    const navigateToCategoryList = () => {
        navigation.navigate(screenNames.CategoriesSubStack, {
            screen: screenNames.Categories,
            params: {
                onCategorySelect,
                isCategorySelectionMode: true
            }
        })
    }

    const onCategorySelect = (categoryId) => {
        setCategoryId(categoryId)
        navigation.goBack()
    }

    const createNewScheduledSpending = () => {
        dispatch(addSpending({
            id: uuid(),
            name: spendingTitle,
            amount: spendingAmount,
            comment: spendingComment,
            categoryId: categoryId,
            frequency: recurrence,
            notificationDateStart: date,
            notificationTimeStart: time,
            isScheduled: true,
            isCompleted: false
        }))
        navigation.goBack()
    }

    const createNewUnplannedSpending = () => {
        dispatch(addSpending({
            id: uuid(),
            name: spendingTitle,
            amount: spendingAmount,
            comment: spendingComment,
            categoryId: categoryId,
            isScheduled: false,
            isCompleted: false
        }))
        navigation.goBack()
    }

    return (
        
        <View style={styles.wrapper}>
            <Tab
                headerTitle={isSpendingScheduled ? "Create a new scheduled spending" : "Create a new unplanned spending"}
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
                        keyboardType='numeric'
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
                {isSpendingScheduled && 
                    <>
                        <View style={styles.partWrapper}>
                            <Text style={styles.partTitle}>Pick notifications frequency</Text>
                            <DropDown value={notificationFrequency} setValue={setRecurrence} placeholder="Frequency"/>
                        </View>
                        <PrimaryButton text="Set date of notification start" onPress={toggleDateModal}/>
                        <PrimaryButton text="Set time of notification" onPress={toggleTimeModal}/> 
                    </>
                }
                <PrimaryButton
                    text={spendingInfo ? "Edit spending" : "Create spending"}
                    onPress={isSpendingScheduled ? createNewScheduledSpending : createNewUnplannedSpending}
                    disabled={!isCreateButtonEnabled}
                /> 
            </Tab>
            <DatePicker
                mode={pickerMode}
                modal
                open={isDatePickerOpened}
                date={date}
                minimumDate={new Date()}
                onConfirm={(date) => {
                    setIsDatePickerOpened(false)
                    if(pickerMode === 'date')
                        setDate(date)
                    else
                        setTime(date)
                }}
                onCancel={() => {
                    setIsDatePickerOpened(false)
                }}
            />
        </View>
    )
}

export default SpendingCreate