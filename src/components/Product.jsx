import { NavLink } from "react-router-dom";


const Product = ({ product }) => {
    const { product_title, product_image, price, product_id } = product
    return (

        <div class="card bg-base-100  shadow-xl">
            <figure className="w-4/5 mx-auto">
                <img className=""
                    src={product_image} />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <div class="card-actions justify-start">
                    <NavLink to={`/details/${product_id}`}> <button class="btn btn-outline btn-primary">View Details</button></NavLink>
                </div>
            </div>
        </div>

    );
};

export default Product;