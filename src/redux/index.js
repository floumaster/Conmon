import { combineReducers, configureStore } from '@reduxjs/toolkit'
import spendingsSlice from './spendingsSlice'
import categorySlice from './categorySlice'

const rootReducer = combineReducers({
    spendings: spendingsSlice,
    categories: categorySlice,
})

export const store = configureStore({
    reducer: rootReducer
})