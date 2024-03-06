import React, { useEffect, useState} from 'react'
// Se importan componentes y utilidades necesarios.
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import SellerProfileBox from '../components/sellerProfileBox.jsx'
import SellerProfileBook from '../components/micro-components/sellerProfileBook.jsx'
import '../styles/index.css'
import '../styles/sellerProfilePage.css'
import { useAuth } from '../utils/authContext.jsx'

export default function SellerProfilePage() {
    const { authData } = useAuth();
    const [books, setBooks] = useState([]); 

    useEffect(() => {
        fetch(`https://microservice-autos.vercel.app/api/read/car/auth/${authData.userID}`, {
           // fetch(`http://localhost:3000/misautos/${authData.userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${authData.idToken}`
            },
        }).then(response => response.json())
        .then(data => setBooks(data))
    }, []);

    return (
        authData.isAuthorized ? ( // Verifica si el usuario está autorizado
            <>

                <Navbar />
                <SellerProfileBox />
                <div className='seller-books-container'>
                    {books && books.length > 0 ? (
                        books.map((book, index) => (
                            <SellerProfileBook key={index} book={book} />
                        ))
                    ) : (
                        <p>No se encontraron autos. en seller profile</p>
                    )}
                </div>
                <Footer />
            </>
        ) : (
            <>
                {window.location.href = '/'}
            </>
        )
    );
}
