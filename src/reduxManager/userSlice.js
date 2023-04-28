import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROOT } from '../constants/links'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const login = createAsyncThunk('user/login', async function(data) {
    const response = await fetch(`${API_ROOT}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return parsedResponse
})

export const register = createAsyncThunk('user/login', async function(data) {
    const response = await fetch(`${API_ROOT}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return parsedResponse
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        error: null
    },
    reducers: {
        deleteUser(state, action) {
            state.user = null
        },
        setUser(state, action) {
            state.user = action.payload
        },
        setCurrency(state, action) {
            state.user = {
                ...state.user,
                currency: action.payload
            }
        },
        setBudget(state, action) {
            state.user = {
                ...state.user,
                monthBudget: action.payload
            }
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            if(action.payload.error){
                state.user = null
                state.error = action.payload.error
            }
            else{
                state.user = action.payload
                state.error = null
                AsyncStorage.setItem('userInfo', JSON.stringify(action.payload))
            }
        },
        [register.fulfilled]: (state, action) => {
            if(action.payload.error){
                state.user = null
                state.error = action.payload.error
            }
            else{
                state.user = action.payload
                state.error = null
                AsyncStorage.setItem('userInfo', JSON.stringify(action.payload))
            }
        },
    }
})

export default userSlice.reducer
export const { deleteUser, setUser, setCurrency, setBudget } = userSlice.actions