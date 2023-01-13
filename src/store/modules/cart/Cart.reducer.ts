import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICartItem } from '@/types/cartItem'
import { IProduct } from '@/types/product'

export interface ICartState {
    items: ICartItem[]
    failedStockCheck: number[]
}

const initialState: ICartState = {
    items: [],
    failedStockCheck: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCartRequest: (_state, _action: PayloadAction<IProduct>) => {
            return
        },
        addProductToCartSuccess: (state, action: PayloadAction<IProduct>) => {
            const product = action.payload

            const productInCartIndex = state.items.findIndex((item) => item.product.id === product.id)

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].quantity++
            } else {
                state.items.push({
                    product,
                    quantity: 1,
                })
            }
        },
        addProductToCartFailure: (state, action: PayloadAction<number>) => {
            state.failedStockCheck.push(action.payload)
        },
    },
})

export const { addProductToCartFailure, addProductToCartSuccess, addProductToCartRequest } = cartSlice.actions

export default cartSlice.reducer
