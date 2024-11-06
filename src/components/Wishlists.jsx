import React from "react";
import Wishlist from "./Wishlist";

const Wishlists = ({ wishListProduct, handleRemoveWish }) => {
  return (
    <div className="py-5">
      {wishListProduct.map((wishlist, index) => (
        <Wishlist
          key={index}
          wishlist={wishlist}
          handleRemoveWish={handleRemoveWish}
        ></Wishlist>
      ))}
    </div>
  );
};

export default Wishlists;
