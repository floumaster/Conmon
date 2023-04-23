import { combineReducers, configureStore } from '@reduxjs/toolkit'
import spendingsSlice from './spendingsSlice'
import categorySlice from './categorySlice'
import templateSlice from './templateSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
    spendings: spendingsSlice,
    categories: categorySlice,
    templates: templateSlice,
    userSlice: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})