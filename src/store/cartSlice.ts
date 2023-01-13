import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IProduct {
    id: number
    title: string
    price: number
}

export interface ICartItem {
    product: IProduct
    quantity: number
}

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

export const { addProductToCartFailure, addProductToCartSuccess } = cartSlice.actions

export default cartSlice.reducer
