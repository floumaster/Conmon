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
                creationDate: new Date,
                completionDate: new Date
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
                isCompleted: true,
                creationDate: new Date,
                completionDate: new Date
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
                isCompleted: false,
                creationDate: new Date
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
                isCompleted: false,
                creationDate: new Date
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
                isCompleted: true,
                creationDate: new Date,
                completionDate: new Date
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
                isCompleted: true,
                creationDate: new Date,
                completionDate: new Date
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
                isCompleted: false,
                creationDate: new Date,
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
                isCompleted: false,
                creationDate: new Date
            }
        ]
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
    }
})

export default spendingsSlice.reducer
export const { addSpending, completeSpending } = spendingsSlice.actions