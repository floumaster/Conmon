import { createSlice } from '@reduxjs/toolkit'

const templatesSlice = createSlice({
    name: 'templates',
    initialState: {
        templates: [
            {
                id: 'skidfjkldjskfl',
                name: 'Template 1',
                description: 'some text',
                isAplied: false,
                spendingsId: [
                    'skidfjkldjskfl',
                    'skidfjkldjskfld',
                ]
            },
        ]
    },
    reducers: {
        addTemplate(state, action) {
            state.templates.push(action.payload)
        },
        applyTemplate(state, action) {
            state.templates = state.templates.map(template => {
                if(template.id === action.payload.id){
                    return {
                        ...template,
                        isAplied: true,
                    }
                }
                return template
            })
        }
    }
})

export default templatesSlice.reducer
export const { addTemplate, applyTemplate } = templatesSlice.actions