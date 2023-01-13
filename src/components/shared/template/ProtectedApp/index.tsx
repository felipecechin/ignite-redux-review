import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import ProtectedRoute from '@/utils/ProtectedRoute'

export default function ProtectedApp() {
    return (
        <ProtectedRoute>
            <Navbar />
            <Outlet />
            <Footer />
        </ProtectedRoute>
    )
}
