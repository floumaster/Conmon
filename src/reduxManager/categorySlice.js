import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
            {
                name: 'Test category 1',
                color: '#000',
                iconName: 'train',
                id: 'dfsdfsdfsdf'
            },
            {
                name: 'Test category 2',
                color: '#000',
                iconName: 'car',
                id: 'lksjfkjaflkewaf'
            },
            {
                name: 'Test category 3',
                color: '#000',
                iconName: 'joystik',
                id: 'dfgfdgdfg'
            },
            {
                name: 'Test category 4',
                color: '#000',
                iconName: 'motorcycle',
                id: 'wqeqwewqee'
            }

        ]
    },
    reducers: {
        addCategory(state, action) {
            state.categories.push(action.payload)
        },
        editCategory(state, action) {
            state.categories = state.categories.map(category => {
                if(category.id === action.payload.id){
                    return {
                        ...category,
                        name: action.payload.name,
                        color: action.payload.color,
                        iconName: action.payload.iconName,
                        id: action.payload.id
                    }
                }
                return category
            })
        }
    }
})

export default categorySlice.reducer
export const { addCategory, editCategory } = categorySlice.actions