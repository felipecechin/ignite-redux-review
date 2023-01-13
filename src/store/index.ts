import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'

import cartSlice from './cartSlice'
import counterSlice from './counterSlice'
import { useDispatch } from 'react-redux'

const combinedReducers = combineReducers({
    counter: counterSlice,
    cart: cartSlice,
})

export const store = configureStore({
    reducer: combinedReducers,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
