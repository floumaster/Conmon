import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import styles from './Register.style'
import Logo from '../../Icons/Logo'
import colors from '../../../constants/colors'
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton'
import screenNames from '../../../constants/screenNames'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, register } from '../../../reduxManager/userSlice'
import { v4 as uuid } from 'uuid';
import { getFCMToken } from '../../../utils/notifications/notifications'

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [isButtonDisabled, setisButtonDisabled] = useState(true)
    const databaseError = useSelector(store => store.userSlice.error)

    const dispatch = useDispatch()

    const onEmailChange = (value) => {
        setEmail(value)
    }

    const onPasswordChange = (value) => {
        setPassword(value)
    }

    const onNameChange = (value) => {
        setName(value)
    }

    const onSurnameChange = (value) => {
        setSurname(value)
    }

    const getIsEmailValid = () => {
        return email.length > 0
        && email.includes('@')
        && email.split('@')[0].length > 0
        && email.split('@')[1].length > 0
        && email.split('@')[1].includes('.')
        && email.split('@')[1].split('.')[0].length > 0
        && email.split('@')[1].split('.')[1].length > 0
    }

    const getIsPasswordValid = () => {
        return password.length > 0
    }
    const getIsNameValid = () => {
        return name.length > 0
    }
    const getIsSurnameValid = () => {
        return surname.length > 0
    }

    useEffect(() => {
        if(getIsEmailValid() && getIsPasswordValid() && getIsNameValid() && getIsSurnameValid())
            setisButtonDisabled(false)
        else
            setisButtonDisabled(true)
    }, [email, password])

    const handleLogin = async () => {
        const token = await getFCMToken()
        dispatch(register({
            id: uuid(),
            name,
            surname,
            monthBudget: 5000,
            currency: '$',
            email,
            password,
            token
        }))
        setEmail('')
        setPassword('')
        setName('')
        setSurname('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Logo width={200} height={200}/>
                <Text style={styles.logoText}>ConMon</Text>
            </View>
            <ScrollView style={styles.form}>
                <TextInput style={styles.loginInput} placeholder='Email' placeholderTextColor={colors.subText} onChangeText={onEmailChange}/>
                <TextInput style={styles.passwordInput} placeholder='Password' placeholderTextColor={colors.subText} onChangeText={onPasswordChange}/>
                <TextInput style={styles.passwordInput} placeholder='Name' placeholderTextColor={colors.subText} onChangeText={onNameChange}/>
                <TextInput style={styles.passwordInput} placeholder='Surname' placeholderTextColor={colors.subText} onChangeText={onSurnameChange}/>
                <View style={styles.errorWrapper}>
                    {databaseError && (
                        <Text style={styles.errorText}>
                            {databaseError}
                        </Text>
                    )}
                </View>
                <PrimaryButton text="Register" style={styles.button} disabled={isButtonDisabled} onPress={handleLogin}/>
            </ScrollView>
        </View>
    )
}

export default Register