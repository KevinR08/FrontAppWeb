import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import '../styles/sellerProfileBox.css'

const SellerProfileBox = () => {
    return (
        <div className="row">
                <div className="main-box">
                    <div className="inner-box">
                        <h3>¿Desea vender un auto?</h3>
                         <a href="/create" className="btn btn-primary"><FontAwesomeIcon className="faIcon" icon={faFile} /> Publicar nuevo auto<a href="#"></a></a>
                    </div>
                    

            </div>
        </div>
    );
};

export default SellerProfileBox;