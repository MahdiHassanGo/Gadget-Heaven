import React from 'react';
import Cart from './Cart';

const Carts = ({ cartProducts, handleRemoveCart }) => {
    return (
        <div className='py-5'>
            {cartProducts?.filter(product => product && product.product_id).map(product => (
                <Cart key={product.product_id} cart={product} handleRemoveCart={handleRemoveCart} />
            ))}
        </div>
    );
};

export default Carts;
