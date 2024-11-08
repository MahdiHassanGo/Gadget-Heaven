import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ cart, handleRemoveCart }) => {
    const { product_title, product_image, price, product_id, description } = cart;
    
    return (
        <div className="w-11/12 md:w-4/5 border-2 mb-3 mx-auto bg-base-100 shadow-xl flex flex-col md:flex-row gap-4 md:gap-8 rounded-lg p-4 md:p-6">
            <figure className="flex justify-center md:justify-start">
                <img className="w-40 md:w-52 rounded" src={product_image} alt={product_title} />
            </figure>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                <div className="text-center md:text-left">
                    <h2 className="card-title text-lg font-semibold">{product_title}</h2>
                    <p className="text-sm md:text-base">{description}</p>
                    <p className="text-sm md:text-base font-medium">Price: ${price}</p>
                </div>
                <div onClick={() => handleRemoveCart(product_id)} className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
                    <button className="text-2xl btn p-2 flex items-center">
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
