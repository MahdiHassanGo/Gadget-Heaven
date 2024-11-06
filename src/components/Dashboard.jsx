import React, { useEffect, useState } from "react";
import {
  getCart,
  getWishList,
  removeCartFromWishList,
  removeWishListFromList,
  removeAllCartFromList,
  revomeAllWishFromList,
} from "../Ulti/addToDB";

import Carts from "./Carts";

import paymentLogo from "../../assets/Group.png";
import { Link } from "react-router-dom";
import Wishlists from "./Wishlists";

const Dashboard = () => {
  const [cartProducts, setProduct] = useState([]);
  useEffect(() => {
    const products = getCart();
    setProduct(products);
  }, []);

  const [wishListProduct, setwishListProduct] = useState([]);
  useEffect(() => {
    const wishproducts = getWishList();
    setwishListProduct(wishproducts);

    console.log(wishproducts); 
  }, []);

  const handleRemoveWish = (id) => {
    removeWishListFromList(id);
    const wishproducts = getWishList();
    setwishListProduct(wishproducts); // 
  };

  const [isactive, setAcive] = useState(true);
  const handleTogging = (active) => {
    if (active) {
      setAcive(true);
    } else {
      setAcive(false);
    }
  };

  const handleRemoveCart = (id) => {
    removeCartFromWishList(id);
    const products = getCart();
    setProduct(products);
  };

  const [cartPrice, setCartPrice] = useState(0);
  const [wishPrice, setWishPrice] = useState(0);
  useEffect(() => {
    const sum = cartProducts.reduce((a, b) => a + (b?.price || 0), 0);
    setCartPrice(parseFloat(sum).toFixed(2));
  }, [cartProducts]);

  useEffect(() => {
    const sum = wishListProduct.reduce((a, b) => a + (b?.price || 0), 0);
    setWishPrice(parseFloat(sum).toFixed(2));
  }, [wishListProduct]);

  const handleSortByPrice = () => {
    if (isactive) {
      const sortProduct = [...cartProducts].sort((a, b) => b.price - a.price);
      setProduct(sortProduct);
    } else {
      const sortWishListProduct = [...wishListProduct].sort(
        (a, b) => b.price - a.price
      );
      setwishListProduct(sortWishListProduct);
    }
  };
  const modal = document.getElementById("my_modal_1");

  const openModal = () => {
    modal.showModal();
  };

  const handleModalClose = (active) => {
    if (active) {
        removeAllCartFromList();
      setProduct([]);
    } else {
        removeAllCartFromList();
      setwishListProduct([]);
    }
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <div className="hero bg-[#9538E2] pb-20 text-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest productsthat will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className=" flex justify-center gap-4 font-extrabold">
              <button
                onClick={() => handleTogging(true)}
                className={`${
                  isactive
                    ? "text-[#9538E2] bg-white btn btn-xl btn-outline px-10 rounded-3xl font-extrabold"
                    : "btn bg-[#9538E2] btn-xl px-10 rounded-3xl "
                }`}
              >
                Cart
              </button>

              <button
                onClick={() => handleTogging(false)}
                className={`${
                  isactive
                    ? "btn btn-xl bg-[#9538E2] px-10 rounded-3xl "
                    : "text-[#9538E2] px-10 rounded-3xl bg-white btn btn-xl btn-outline font-extrabold"
                }`}
              >
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-6 w-10/12 mx-auto">
        <div>
          <h1 className="text-lg font-bold">{`${
            isactive ? "Cart" : "Wish"
          }`}</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="font-bold">
            Total Cost: ${`${isactive ? cartPrice : wishPrice}`}
          </p>
          <button
            onClick={() => handleSortByPrice()}
            className="btn btn-outline text-[#9538E2] rounded-3xl"
            disabled={cartProducts.length === 0}
          >
            Sort by price
          </button>
          <button
            onClick={openModal}
            disabled={cartProducts.length === 0}
            className={`btn bg-purple-700 text-white rounded-3xl px-6 ${
              cartProducts.length === 0
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-purple-700 text-white"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div>
        {isactive ? (
          <Carts
            cartProducts={cartProducts}
            handleRemoveCart={handleRemoveCart}
          ></Carts>
        ) : (
          <Wishlists
            wishListProduct={wishListProduct}
            handleRemoveWish={handleRemoveWish}
          ></Wishlists>
        )}
      </div>

      {/* modal for purchace button */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <div className="flex justify-center">
            <img src={paymentLogo} alt="" />
          </div>
          <p className="py-4 text-2xl font-bold">Payment Successfully</p>
          <div className="border-t"></div>
          <p>Thanks for Purchasing</p>
          <p>Total: ${`${isactive ? cartPrice : wishPrice}`}</p>
          <div className=" ">
            <form method="dialog ">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                <button
                  onClick={() => handleModalClose(isactive)}
                  className="btn flex w-2/3 mx-auto rounded-3xl font-bold"
                >
                  Close
                </button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
