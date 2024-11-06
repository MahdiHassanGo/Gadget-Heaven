const DashboardDetails = ({ products }) => {
  const { product_title, product_image, price, product_id } = products;
  console.log(products);
  return (
    <div class="card bg-base-100  shadow-xl">
      <figure className="w-4/5 mx-auto">
        <img className="" src={product_image} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{product_title}</h2>
        <p>Price: {price}K</p>
        <div class="card-actions justify-start"></div>
      </div>
    </div>
  );
};

export default DashboardDetails;
