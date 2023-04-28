import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROOT } from '../constants/links'

export const getTemplates = createAsyncThunk('templates/getAllUserTemplates', async function(data) {
    const response = await fetch(`${API_ROOT}/templates/getAllUserTemplates`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return parsedResponse
})

export const createTemplate = createAsyncThunk('templates/createUserTemplate', async function(data) {
    const response = await fetch(`${API_ROOT}/templates/createUserTemplate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return data
})

export const applyTemplate = createAsyncThunk('templates/applyUserTemplate', async function(data) {
    const response = await fetch(`${API_ROOT}/templates/applyUserTemplate`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const parsedResponse = await response.json()
    return data
})

const templatesSlice = createSlice({
    name: 'templates',
    initialState: {
        templates: [
        ]
    },
    reducers: {
        addTemplate(state, action) {
            state.templates.push(action.payload)
        },
    },
    extraReducers: {
        [getTemplates.fulfilled]: (state, action) => {
            state.templates = action.payload
            console.log(state.templates)
        },
        [createTemplate.fulfilled]: (state, action) => {
            state.templates.push({
                ...action.payload.templateInfo,
                spendingsId: action.payload.spendingIds
            })
        },
        [applyTemplate.fulfilled]: (state, action) => {
            state.templates = state.templates.map(template => {
                if(template.id === action.payload.id){
                    return {
                        ...template,
                        isAplied: true,
                    }
                }
                return template
            })
        },
    }
})

export default templatesSlice.reducer
export const { addTemplate } = templatesSlice.actions