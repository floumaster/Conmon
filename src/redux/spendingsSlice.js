import { createSlice } from '@reduxjs/toolkit'

const spendingsSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendings: [

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