import CartReducer from './cart/Cart.reducer'
import CounterReducer from './counter/Counter.reducer'
import { combineReducers } from '@reduxjs/toolkit'

export default combineReducers({
    counter: CounterReducer,
    cart: CartReducer,
})
