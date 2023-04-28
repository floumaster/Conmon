import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Login.style'
import Logo from '../../Icons/Logo'
import colors from '../../../constants/colors'
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton'
import screenNames from '../../../constants/screenNames'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../reduxManager/userSlice'
import { getFCMToken } from '../../../utils/notifications/notifications'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isButtonDisabled, setisButtonDisabled] = useState(true)
    const databaseError = useSelector(store => store.userSlice.error)

    const dispatch = useDispatch()

    const onEmailChange = (value) => {
        setEmail(value)
    }

    const onPasswordChange = (value) => {
        setPassword(value)
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

    useEffect(() => {
        if(getIsEmailValid() && getIsPasswordValid())
            setisButtonDisabled(false)
        else
            setisButtonDisabled(true)
    }, [email, password])

    const handleLogin = async () => {
        const token = await getFCMToken()
        dispatch(login({
            email,
            password,
            token
        }))
        setEmail('')
        setPassword('')
    }

    const handleNavigateToRegister = () => {
        navigation.navigate(screenNames.Register)
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Logo width={200} height={200}/>
                <Text style={styles.logoText}>ConMon</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.loginInput} value={email} placeholder='Email' placeholderTextColor={colors.subText} onChangeText={onEmailChange}/>
                <TextInput style={styles.passwordInput} value={password} placeholder='Password' placeholderTextColor={colors.subText} onChangeText={onPasswordChange}/>
                <View style={styles.errorWrapper}>
                    {databaseError && (
                        <Text style={styles.errorText}>
                            {databaseError}
                        </Text>
                    )}
                </View>
                <PrimaryButton text="Login" style={styles.button} disabled={isButtonDisabled} onPress={handleLogin}/>
                <TouchableOpacity style={styles.alternateButtonWrapper} onPress={handleNavigateToRegister}>
                    <Text style={styles.alternateButton}>Don't have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login