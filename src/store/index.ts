import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import { useDispatch } from 'react-redux'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
