import Cart from './components/Cart'
import Catalog from './components/Catalog'
import { Counter } from './components/Counter'
import { Provider } from 'react-redux'
import { store } from './store'

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
            <hr />
            <div className='flex flex-col items-center'>
                <Catalog />
                <hr className='w-full' />
                <Cart />
            </div>
        </Provider>
    )
}
