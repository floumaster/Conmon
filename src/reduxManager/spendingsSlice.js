import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROOT } from '../constants/links'
import moment from 'moment'

export const getSpendings = createAsyncThunk('spendings/getAllUserSpendings', async function(data) {
    const response = await fetch(`${API_ROOT}/spendings/getAllUserSpendings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return parsedResponse
})

export const createSpending = createAsyncThunk('spendings/createUserSpending', async function(data) {
    const response = await fetch(`${API_ROOT}/spendings/createUserSpending`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return data
})

export const completeSpending = createAsyncThunk('spendings/completeUserSpending', async function(data) {
    const response = await fetch(`${API_ROOT}/spendings/completeUserSpending`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return data
})

const spendingsSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendings: []
    },
    reducers: {
        addSpending(state, action) {
            state.spendings.push(action.payload)
        },
        completeSpending(state, action) {
            state.spendings = state.spendings.map(spending => {
                if(spending.id === action.payload.id){
                    return {
                        ...spending,
                        isCompleted: true,
                        completionDate: action.payload.completionDate
                    }
                }
                return spending
            })
        }
    },
    extraReducers: {
        [getSpendings.fulfilled]: (state, action) => {
            state.spendings = action.payload
        },
        [createSpending.fulfilled]: (state, action) => {
            state.spendings.push(action.payload)
        },
        [completeSpending.fulfilled]: (state, action) => {
            state.spendings = state.spendings.map(spending => {
                if(spending.id === action.payload.spendingId){
                    return {
                        ...spending,
                        isCompleted: true,
                        completionDate: moment().format('YYYY-MM-DD')
                    }
                }
                return spending
            })
        },
    }
})

export default spendingsSlice.reducer
export const { addSpending } = spendingsSlice.actions