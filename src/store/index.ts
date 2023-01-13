import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import counterSlice from './counterSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
