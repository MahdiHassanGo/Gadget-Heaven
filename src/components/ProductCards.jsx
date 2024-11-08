

import { useLoaderData } from "react-router-dom";
import Product from "./Product";



const ProductCards = () => {
    const products = useLoaderData()




    return (
        <>
            
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }



            </div>
        </>
    );
};

export default ProductCards;