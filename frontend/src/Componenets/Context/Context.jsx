import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import homePages from "../../assets/images/asset";

export const contextApi = createContext();

export default function Context({ children }) {
  const home = homePages.filter((pro) => pro.type === "home");
  const [userInfo, setUserInfo] = useState([]);
  const [authUser, setAuthUser] = useState([]);
  const office = homePages.filter((pro) => pro.type === "office");
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(home);
  const [addCart, setAddToCart] = useState({});
  const [country, setCountry] = useState([]);
  const [allproduct, setAllProduct] = useState([]);
  const [add, setAdd] = useState(0);

  const handelAddToCart = (id) => {
    setAddToCart((addCart) => {
      let addtoCartItem = { ...addCart, [id]: (addCart[id] || 0) + 1 };
      const hasProduct = Object.values(addtoCartItem).some((pro) => pro > 0);
      const product = homePages.find((item) => item.id === id);
      if (hasProduct) {
        setAdd((prev) => prev + 1);
        setAllProduct((prev) => {
          const pro = prev.find((pro) => pro.id === id); // Use `id` directly
          if (pro) {
            return prev.map((item) =>
              item.id === id ? { ...item, quantity: addtoCartItem[id] } : item
            );
          } else {
            return [...prev, { ...product, quantity: addtoCartItem[id] }];
          }
        });
      }
      return addtoCartItem;
    });
  };

  const removeCart = (index) => {
    // Find the product to remove
    const productToRemove = allproduct.find((product) => product.id === index);

    if (productToRemove) {
      // Decrement 'add' by the quantity of the product being removed, ensuring no negative value
      setAdd((prev) => Math.max(0, prev - productToRemove.quantity)); // Prevent negative cart count

      // Remove the product from the allproduct array
      setAllProduct((prev) => prev.filter((product) => product.id !== index));

      // Display the toast message
      toast.error("Product deleted");
    }
  };

  const total = () => {
    return allproduct.reduce((acc, item) => {
      if (item.price && item.quantity) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);
  };

  const contextValues = {
    open,
    products,
    setProducts,
    setOpen,
    handelAddToCart,
    removeCart,
    total,
    add,
    setAdd,
    userInfo,
    setUserInfo,
    authUser,
    setAuthUser,
    setCountry,
    country,
    allproduct,
    setAllProduct,
    office,
    home,
  };

  return (
    <div>
      <contextApi.Provider value={contextValues}>
        {children}
      </contextApi.Provider>
    </div>
  );
}
