import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
    const { products } = props;

    return (
        <div className="row mb-4">
            {
                products.map((product) => {
                    return <ProductItem
                        // {...product}
                        // key={product.id}
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        currency={product.currency}
                        image={product.image}
                    />
                })
            }
        </div>
    );
}

export default ProductList;