import React from 'react'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import CreateBook from '../components/createBook.jsx'
import '../styles/index.css'
import { useAuth } from '../utils/authContext.jsx'

export default function CreateBookPage() {
    const { authData } = useAuth();
    return (
        authData.isAuthorized ? (
        <>
        <Navbar />
        <CreateBook />
        <Footer />
        </>
        ) : (
            <>
                {window.location.href = '/'}
            </>
        )
    );
}

