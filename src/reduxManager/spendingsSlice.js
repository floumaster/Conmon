import { createSlice } from '@reduxjs/toolkit'

const spendingsSlice = createSlice({
    name: 'spendings',
    initialState: {
        spendings: [
            {
                id: 'skidfjkldjskfl',
                name: 'Spending 1',
                amount: 200,
                comment: 'comment comment comment comment comment',
                categoryId: 'lksjfkjaflkewaf',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: true,
                isCompleted: true,
            },
            {
                id: 'skidfjkldjskfld',
                name: 'Spending 2',
                amount: 500,
                comment: 'comment',
                categoryId: 'dfgfdgdfg',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: true,
                isCompleted: true
            },
            {
                id: 'skiasdfjkldjskfl',
                name: 'Spending 3',
                amount: 600,
                comment: 'comment',
                categoryId: 'wqeqwewqee',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: true,
                isCompleted: false
            },
            {
                id: 'skidfjsdskldjskfld',
                name: 'Spending 4',
                amount: 700,
                comment: 'comment',
                categoryId: 'lksjfkjaflkewaf',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: true,
                isCompleted: false
            },
            {
                id: 'skidfjkldjskfl',
                name: 'Spending 5',
                amount: 200,
                comment: 'comment',
                categoryId: 'lksjfkjaflkewaf',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: false,
                isCompleted: true
            },
            {
                id: 'skidfjkldjskfld',
                name: 'Spending 6',
                amount: 500,
                comment: 'comment',
                categoryId: 'dfgfdgdfg',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: false,
                isCompleted: true
            },
            {
                id: 'skiasdfjkldjskfl',
                name: 'Spending 7',
                amount: 600,
                comment: 'comment',
                categoryId: 'wqeqwewqee',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: false,
                isCompleted: false
            },
            {
                id: 'skidfjsdskldjskfld',
                name: 'Spending 8',
                amount: 700,
                comment: 'comment',
                categoryId: 'lksjfkjaflkewaf',
                frequency: 'Once a day',
                notificationDateStart: null,
                notificationTimeStart: null,
                isScheduled: false,
                isCompleted: false
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