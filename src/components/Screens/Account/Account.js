import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TextInput } from 'react-native'
import Tab from "../../Tab/Tab";
import styles from './Account.style'
import BackArrow from "../../Icons/BackArrow";
import colors from "../../../constants/colors";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Cap from "../../Icons/Cap";
import { useSelector, useDispatch } from "react-redux";
import DropDown from '../../DropDown'
import currencies from "../../../constants/currencies";
import moment from "moment";
import { deleteUser, setBudget, setCurrency } from "../../../reduxManager/userSlice";
import Logout from "../../Icons/Logout";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_ROOT } from "../../../constants/links";

const Account = ({ navigation }) => {

    const userInfo = useSelector(store => store.userSlice.user)
    const [isCurrencyChanged, setIsCurrencyChanged] = useState(false)
    const [isBudgetChanged, setIsBudgetChanged] = useState(false)
    const [currencyStr, setCurrencyStr] = useState(null)
    const [budgetStr, setBudgetStr] = useState(userInfo?.monthBudget.toString())

    const setBudgetAPICall = async function (budget, userId) {
        const response = await fetch(`${API_ROOT}/auth/setBudget`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                budget
            })
        })
        const parsedResponse = await response.json()
        return budget
    }

    const setCurrencyAPICall = async function (currency, userId) {
        const response = await fetch(`${API_ROOT}/auth/setCurrency`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                currency
            })
        })
        const parsedResponse = await response.json()
        return currency
    }

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userInfo')
        dispatch(deleteUser())
    }
    const currentMonth = moment().format('MMMM')

    const dispatch = useDispatch()

    const setNewCurrency = useCallback((val) => {
        const currencySymbol = val[val.length - 1]
        setCurrencyStr(currencySymbol)
        setIsCurrencyChanged(true)
    }, [])


    const setNewBudget = (budget) => {
        setBudgetStr(budget)
        setIsBudgetChanged(true)
    }

    const handleSubmit = () => {
        if (isBudgetChanged) {
            setBudgetAPICall(budgetStr, userInfo.id).then(() => {
                dispatch(setBudget(budgetStr))
            })
            setIsBudgetChanged(false)
        }
        if (isCurrencyChanged) {
            setCurrencyAPICall(currencyStr, userInfo.id).then(() => {
                dispatch(setCurrency(currencyStr))
            })
            setIsCurrencyChanged(false)
        }
    }

    const isButtonDisabled = !isBudgetChanged && !isCurrencyChanged

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Personal info"
                style={{ flex: 1 }}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
                HeaderIconRight={() => <Logout width={20} fill={colors.white} onPress={handleLogout} />}
                isScrollable
            >
                <View style={styles.profileWrapper}>
                    <AnimatedCircularProgress
                        size={150}
                        width={3}
                        fill={100}
                        prefill={50}
                        tintColor="#00e0ff"
                        backgroundColor="#3d5875"
                    >
                        {
                            () => <Cap width={150} height={100} style={styles.profileIcon} onPress={() => { }} />
                        }
                    </AnimatedCircularProgress>
                    <View style={styles.personalInfo}>
                        <View style={styles.personalInfo}>
                            <Text style={styles.personalInfoText}>{userInfo?.name} {userInfo?.surname}</Text>
                        </View>
                        <View style={styles.moneyInfo}>
                            <View style={styles.currencyWrapper}>
                                <Text style={styles.currencyTitle}>Wallet currency</Text>
                                <DropDown value={currencies} setValue={setNewCurrency} placeholder="Currency" />
                            </View>
                            <View style={styles.budgetWrapper}>
                                <Text style={styles.currencyTitle}>Budget for {currentMonth}</Text>
                                <TextInput style={styles.budgetInput} inputMode="numeric" onChangeText={setNewBudget} value={budgetStr} />
                            </View>
                        </View>
                        <PrimaryButton text="Save changes" style={styles.submitButton} disabled={isButtonDisabled} onPress={handleSubmit} />
                    </View>
                </View>
            </Tab>
        </View>
    )
}

export default Account