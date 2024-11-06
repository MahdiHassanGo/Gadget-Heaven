import { toast } from "react-toastify";

const getCart = () => {
  const storedata = localStorage.getItem("cart");
  if (storedata) {
    return JSON.parse(storedata);
  } else {
    return [];
  }
};

const addCartToList = (product) => {
  const cart = getCart();
  const isExist = cart.find((item) => item.product_id === product.product_id);
  if (isExist) {
    toast.error("Already added in Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  } else {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added successful", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

const removeCartFromWishList = (id) => {
  const carts = getCart();
  const remaining = carts.filter((cart) => cart.product_id !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
};

const removeAllCartFromList = () => {
  localStorage.removeItem("cart");
};

const getWishList = () => {
  const storedWishdata = localStorage.getItem("wish");
  if (storedWishdata) {
    return JSON.parse(storedWishdata);
  } else {
    return [];
  }
};

const addWishtListToList = (product) => {
  console.log(product);

  if (!product || !product.product_id) {
    toast.error("Invalid product. Please try again.", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    return;
  }

  const wish = getWishList();
  const isExist = wish.find((item) => item.product_id === product.product_id);
  if (isExist) {
    toast.error("Already added in Wish", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  } else {
    wish.push(product);
    localStorage.setItem("wish", JSON.stringify(wish));
    toast.success("Added successful", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

const removeWishListFromList = (id) => {
  const wishs = getWishList();
  const remaining = wishs.filter((cart) => cart.product_id !== id);
  localStorage.setItem("wish", JSON.stringify(remaining));
};

const revomeAllWishFromList = () => {
  localStorage.removeItem("wish");
};

export {
  getCart,
  addCartToList,
  removeCartFromWishList,
  addWishtListToList,
  getWishList,
  removeWishListFromList,
  removeAllCartFromList,
  revomeAllWishFromList,
};
