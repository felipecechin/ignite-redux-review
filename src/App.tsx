import { Counter } from './components/Counter'
import { Provider } from 'react-redux'
import { store } from './store'

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
        </Provider>
    )
}
