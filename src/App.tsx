import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Auth from '@/components/shared/template/Auth'
import Dashboard from '@/components/system/Dashboard'
import Home from '@/components/system/Home'
import Login from '@/components/system/Login'
import ProtectedApp from '@/components/shared/template/ProtectedApp'

export default function App() {
    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route
                    path='/auth'
                    element={<Auth />}
                >
                    <Route
                        path='login'
                        element={<Login />}
                    />
                </Route>
                <Route
                    path='/'
                    element={<ProtectedApp />}
                >
                    <Route
                        path=''
                        element={<Home />}
                    />
                    <Route
                        path='dashboard'
                        element={<Dashboard />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
