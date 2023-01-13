import { IProduct, addProductToCartSuccess } from '@/store/cartSlice'

import { RootState } from '@/store'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

interface CatalogItemProps {
    product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {
    const dispatch = useDispatch()

    const hasFailedStockCheck = useSelector<RootState, boolean>((state) => {
        return state.cart.failedStockCheck.includes(product.id)
    })

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartSuccess(product))
    }, [dispatch, product])

    return (
        <article>
            <strong>{product.title}</strong> {' - '}
            <span>{product.price}</span> {'  '}
            <button
                type='button'
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>
            {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
        </article>
    )
}
