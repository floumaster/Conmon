import { createSlice } from '@reduxjs/toolkit'

const spendingsSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendings: [
            {
                name: 'Taxes',
                amount: 6,
            },
            {
                name: 'Huyaxes',
                amount: 56, 
            },
            {
                name: 'Kek cheburek',
                amount: 64, 
            },
            {
                name: 'qweert',
                amount: 16, 
            },
            {
                name: 'Taxsdfgsdes',
                amount: 26, 
            },
            {
                name: 'fdsgsdf',
                amount: 36, 
            }
        ]
    },
    reducers: {
        addSpending(state, action) {
            state.spendings.push(action.payload)
        }
    }
})

export default spendingsSlice.reducer
export const { addSpending } = spendingsSlice.actions