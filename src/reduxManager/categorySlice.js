import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROOT } from '../constants/links'

export const getCategories = createAsyncThunk('categories/getCategories', async function(data) {
    const response = await fetch(`${API_ROOT}/categories/getAllUserCategories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return parsedResponse
})

export const createCategory = createAsyncThunk('categories/createCategory', async function(data) {
    const response = await fetch(`${API_ROOT}/categories/createUserCategory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return data
})

export const editCategory = createAsyncThunk('categories/editUserCategory', async function(data) {
    const response = await fetch(`${API_ROOT}/categories/editUserCategory`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return data
})

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
            // {
            //     name: 'Test category 1',
            //     color: '#99f4ff',
            //     iconName: 'train',
            //     id: 'dfsdfsdfsdf'
            // },
            // {
            //     name: 'Test category 2',
            //     color: '#784db8',
            //     iconName: 'car',
            //     id: 'lksjfkjaflkewaf'
            // },
            // {
            //     name: 'Test category 3',
            //     color: '#b0287e',
            //     iconName: 'joystik',
            //     id: 'dfgfdgdfg'
            // },
            // {
            //     name: 'Test category 4',
            //     color: '#95cf32',
            //     iconName: 'motorcycle',
            //     id: 'wqeqwewqee'
            // }

        ]
    },
    reducers: {
        addCategory(state, action) {
            state.categories.push(action.payload)
        },
    },
    extraReducers: {
        [getCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
        [createCategory.fulfilled]: (state, action) => {
            state.categories.push(action.payload)
        },
        [editCategory.fulfilled]: (state, action) => {
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
        },
    }
})

export default categorySlice.reducer
export const { addCategory } = categorySlice.actions