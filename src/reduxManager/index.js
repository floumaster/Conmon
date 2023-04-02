import { combineReducers, configureStore } from '@reduxjs/toolkit'
import spendingsSlice from './spendingsSlice'
import categorySlice from './categorySlice'
import templateSlice from './templateSlice'

const rootReducer = combineReducers({
    spendings: spendingsSlice,
    categories: categorySlice,
    templates: templateSlice,
})

export const store = configureStore({
    reducer: rootReducer
})