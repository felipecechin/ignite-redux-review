import CartSaga from './cart/Cart.saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(): Generator {
    return yield all([CartSaga])
}
