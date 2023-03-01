import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
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
                    }
                }
                return category
            })
        }
    }
})

export default categorySlice.reducer
export const { addCategory, editCategory } = categorySlice.actions