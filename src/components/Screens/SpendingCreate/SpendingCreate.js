import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useDispatch, useSelector } from 'react-redux'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Tab from '../../Tab'
import styles from './SpendingCreate.style'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import PrimaryButton from '../../Buttons/PrimaryButton'
import CommonButton from '../../Buttons/CommonButton/CommonButton';
import Input from '../../Input'
import DropDown from '../../DropDown'
import Money from '../../Icons/Money'
import Categories from '../../Icons/Categories'
import screenNames from '../../../constants/screenNames'
import notificationFrequency from '../../../constants/notificationFrequency'
import { addSpending } from '../../../reduxManager/spendingsSlice'
import { API2_ROOT } from '../../../constants/links';
import Tag from '../../Icons/Tag';
import { createSpending } from '../../../reduxManager/spendingsSlice';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment';

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
    const userInfo = useSelector(store => store.userSlice.user)

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
        dispatch(createSpending({
            id: uuidv4(),
            name: spendingTitle,
            amount: spendingAmount,
            comment: spendingComment,
            categoryId: categoryId,
            frequency: recurrence,
            notificationDateStart: moment(date).format('YYYY-MM-DD'),
            isScheduled: true,
            isCompleted: false,
            creationDate: moment().format('YYYY-MM-DD'),
            user_id: userInfo.id
        }))
        navigation.goBack()
    }

    const createNewUnplannedSpending = () => {
        dispatch(createSpending({
            id: uuidv4(),
            name: spendingTitle,
            amount: spendingAmount,
            comment: spendingComment,
            categoryId: categoryId,
            isScheduled: false,
            isCompleted: false,
            creationDate: moment().format('YYYY-MM-DD'),
            user_id: userInfo.id
        }))
        navigation.goBack()
    }

    const handleImageProcess = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true
        });
        const base64Img = result.assets[0].base64
        const response = await fetch(`${API2_ROOT}/getInfoFromReceipt`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: base64Img
        })
        const parsedResponse = await response.json()
        setSpendingTitle('Supermarket shopping')
        setSpendingAmount(`${parsedResponse.amount}`)
        setSpendingComment(parsedResponse.commend)
        setCategoryId('4a6d8dd5-c612-4395-8db0-352ced90ac75')
    }

    return (
        
        <View style={styles.wrapper}>
            <Tab
                headerTitle={isSpendingScheduled ? "Create a new scheduled spending" : "Create a new unplanned spending"}
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
                isScrollable={true}
            >
                <View style={styles.partWrapper}>
                    <Input value={spendingTitle} setValue={setSpendingTitle} placeholder="Spending name"
                        Icon={() => <Tag fill={colors.white} width={20}/>}
                    />
                </View>
                <View style={styles.partWrapper}>
                    <Input
                        keyboardType="numeric"
                        value={spendingAmount}
                        setValue={(val) => setSpendingAmount(parseInt(val))}
                        placeholder="Spending amount"
                        Icon={() => <Money fill={colors.textPrimary} width={18}/>}
                    />
                </View>
                <View style={styles.partWrapper}>
                    <Input
                        value={spendingComment}
                        setValue={setSpendingComment}
                        placeholder="Spending comment"
                        Icon={() => <Categories fill={colors.textPrimary} width={18}/>}
                    />
                </View>
                <CommonButton
                    text="Chose a category"
                    onPress={navigateToCategoryList}
                    style={styles.categoryPicker}
                    textStyle={styles.categoryPickerText}
                    isIconShown={true}
                    isCompleted={categoryId.length}
                />
                {isSpendingScheduled && 
                    <>
                        <View style={styles.partWrapper}>
                            <Text style={styles.partTitle}>Pick notifications frequency</Text>
                            <DropDown value={notificationFrequency} setValue={setRecurrence} placeholder="Frequency" />
                        </View>
                        <CommonButton
                            text="Set date of notification start"
                            onPress={toggleDateModal}
                            style={styles.categoryPicker}
                            textStyle={styles.categoryPickerText}
                        />
                    </>
                }
                {!isSpendingScheduled && (
                    <View style={styles.submitButtonWrapper}>
                        <PrimaryButton
                            text={"Use receipt photo"}
                            onPress={handleImageProcess}
                        />
                    </View>
                )}
                <View style={styles.submitButtonWrapper}>
                    <PrimaryButton
                        text={spendingInfo ? "Edit spending" : "Create spending"}
                        onPress={isSpendingScheduled ? createNewScheduledSpending : createNewUnplannedSpending}
                        disabled={!isCreateButtonEnabled}
                    />
                </View> 
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