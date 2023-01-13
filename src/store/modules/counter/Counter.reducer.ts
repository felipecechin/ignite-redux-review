import { AppDispatch, AppThunk } from '@/store'
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

//returns a promise as example
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const newAsyncIncrement = createAsyncThunk('counter/newAsyncIncrement', async (amount: number) => {
    await sleep(1000)
    return amount
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(newAsyncIncrement.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export function asyncIncrement(): AppThunk {
    return async function (dispatch: AppDispatch) {
        await sleep(1000)
        dispatch(incrementByAmount(10))
    }
}

export default counterSlice.reducer
