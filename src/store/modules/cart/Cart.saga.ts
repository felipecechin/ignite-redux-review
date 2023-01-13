import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './Cart.reducer'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { AxiosResponse } from 'axios'
import { RootState } from '@/store'
import api from '@/services/api'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
    id: number
    quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
    const product = payload

    const currentQuantity: number = yield select((state: RootState) => {
        return state.cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0
    })

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, 'stock/' + product.id)

    if (availableStockResponse.data.quantity > currentQuantity) {
        yield put(addProductToCartSuccess(product))
    } else {
        yield put(addProductToCartFailure(product.id))
    }

    console.log(currentQuantity)

    console.log(payload)
}

export default all([takeLatest(addProductToCartRequest.type, checkProductStock)])
