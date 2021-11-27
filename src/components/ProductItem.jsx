import React from 'react';
import './ProductItem.css';

function ProductItem(props) {
    const {name, price, currency, image} = props;

    return(
        <div className="product-item col-4 d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
        </div>
    );
}

export default ProductItem;