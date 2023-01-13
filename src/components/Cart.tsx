import { ICartItem } from '@/store/cartSlice'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export function Cart() {
    const cart = useSelector<RootState, ICartItem[]>((state) => state.cart.items)

    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                    <tr key={item.product.id}>
                        <td>{item.product.title}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{(item.quantity * item.product.price).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Cart
