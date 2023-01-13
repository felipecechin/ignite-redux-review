import { RootState, useAppDispatch } from '@/store'
import { asyncIncrement, decrement, increment } from '@/store/counterSlice'

import { useSelector } from 'react-redux'

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div className='flex flex-col items-center'>
                <button
                    aria-label='Increment async value'
                    onClick={() => dispatch(asyncIncrement())}
                >
                    Increment Async
                </button>
                <button
                    aria-label='Increment async value'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
