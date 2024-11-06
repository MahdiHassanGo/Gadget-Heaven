import productData from './products.json'; 

const ProductsList = () => {
    const products = productData; 

    return (
        <div>
            {products.map(product => (
                <div key={product.product_id}>
                    <h2>{product.product_title}</h2>
                    <img src={product.product_image} alt={product.product_title} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating} ⭐</p>
                    <p>Availability: {product.availability ? "In Stock" : "Out of Stock"}</p>
                </div>
            ))}
        </div>
    );
};
export default ProductsList