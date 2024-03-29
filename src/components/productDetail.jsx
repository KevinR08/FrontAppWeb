import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/productDetail.css";
import Stars from './micro-components/stars.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProductDetail = ({book}) => {
    const urlImage = "https://firebasestorage.googleapis.com/v0/b/polibooksweb.appspot.com/o/polibooks%2FnotAvailableBook.png?alt=media&token=0b68b219-5e8a-4652-92d5-7b1ddcd2d129"
    function handleBuy() {
        const url = `https://wa.me/593${book.contact}?text=Hola, me interesa comprar tu auto ${book.title}`;
        window.open(url, '_blank');
    }

    return (
        <section className="product-detail">
            <div className="left-detail">
                <Swiper
                    className='product-detail-swiper'
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                    (book.image.length > 0) ?(
                    book.image.map((url, index) => (
                        <SwiperSlide key={index}>
                            <img src={url} alt="imagen del auto" />
                        </SwiperSlide>
                    ))) :
                    (	
                        <SwiperSlide>
                        <img src={urlImage} alt="imagen no disponible" />
                        </SwiperSlide>
                    )
                    }
                </Swiper>
                <br /> <br />
            </div>
            <div className="right-detail">
                <h1 className="product-detail-title"><b>{book.title}</b></h1>

                <table className="grid-table">
                <tbody>
                    <tr>
                        <td><strong>Descripción:</strong></td>
                        <td>{book.description}</td>
                    </tr>
                    <tr>
                        <td><strong>Marca:</strong></td>
                        <td>{book.brand}</td>
                    </tr>
                    <tr>
                        <td><strong>Kilometraje:</strong></td>
                        <td>{book.km} km</td>
                    </tr>
                    <tr>
                        <td><strong>Modelo:</strong></td>
                        <td>{book.modelo}</td>
                    </tr>
                    <tr>
                        <td><strong>Año:</strong></td>
                        <td>{book.anio}</td>
                    </tr>
                    <tr>
                        <td><strong>Precio:</strong></td>
                        <td>$ {book.price}</td>
                    </tr>
                    <tr>
                        <td><strong>Contacto:</strong></td>
                        <td>{book.contact}</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Calificación:</strong></td>
                        <td><Stars rating={4}/></td>
                    </tr>
                    </tbody>
                </table>
                <button className="buy-button" onClick={handleBuy}>Comprar</button>
            </div>

        </section>
    );
}


export default ProductDetail;
