import { Profile } from '@/types/profile'
import env from '@/env'
import { useCookies } from 'react-cookie'

export default function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    const profile = {
        name: 'John Doe',
    } as Profile

    const login = () => {
        setCookie('token', 'token-123', {
            expires: new Date(Date.now() + 60 * 60 * 4 * 1000), //4h
            maxAge: 60 * 60 * 4, //4h
            path: '/',
            sameSite: 'lax',
        })
    }

    const logout = () => {
        removeCookie('token', {
            maxAge: -1,
            path: '/',
        })
    }

    return (
        <div>
            <h1 className='text-2xl font-bold underline'>Login</h1>
            <p>{profile.name}</p>
            <p>
                Token: <span className='font-bold'>{cookies.token}</span>
            </p>
            <button
                onClick={login}
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
                Fazer login
            </button>
            <button
                onClick={logout}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
                Fazer logout
            </button>
            <p>{env.API}</p>
        </div>
    )
}
