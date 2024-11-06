import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Product from "./Product";


const ProductCategory = () => {
    const { category } = useParams()

    const data = useLoaderData()

    const [product, setProduct] = useState([])
    useEffect(() => {
        if (category) {
            const categoryProducts = [...data].filter(product => product.category === category)
            console.log(categoryProducts);
            if (category === 'AllProducts') {
                setProduct(data)
            } else {
                setProduct(categoryProducts)
            }
        } else {
            setProduct(data)
        }

    }, [category, product])




    return (
        <>
            
            <div className="grid grid-cols-3 gap-3">
                {
                    product.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </>
    );
};

export default ProductCategory;