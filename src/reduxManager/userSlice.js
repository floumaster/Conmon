import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            id: 'skidfjkldjskfl',
            name: 'Nicola',
            surname: 'Covac',
            monthBudget: 5000,
            currency: '$'
        }
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
        },
    }
})

export default userSlice.reducer
export const { deleteUser, setUser, setCurrency, setBudget } = userSlice.actions