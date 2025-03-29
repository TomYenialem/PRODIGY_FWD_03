import React, { useState, useEffect } from "react";
import "./Shop.css";
import homePages from "../../assets/images/asset";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { contextApi } from "../Context/Context";
import debounce from "lodash/debounce";
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
export default function Shop() {
  const homes = homePages.filter((pro) => pro.catagori === "homepage");
  const { handelAddToCart } = useContext(contextApi);
  const [allpro, setAllPro] = useState(homes);
  const [shopColor, setShopColor] = useState("");
  const [searchitem, setSearchItem] = useState("");
  const [likedProducts, setLikedProducts] = useState({});
  const [match, setMatch] = useState(false); 
  // like button
  const handleLove = (productId) => {
    if (!likedProducts[productId]) {
      toast.success("Added to favorites");
      setLikedProducts((prevState) => ({
        ...prevState,
        [productId]: true, // Mark the product as liked
      }));
    }
  };

  const handelSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const handleProduct = (product) => {
    const chair = homePages.filter((pro) => pro.type === product);
    setAllPro(chair);
    handleColor(product);
  };
  const handleColor = (color) => {
    setShopColor(color);
  };

  const handelColor = (color) => {
    let colors = homePages.filter((pro) => pro.color === color);
    setAllPro(colors);
    setShopColor(color);
    window.scrollTo(0, 300);
  };

  const price = (val) => {
    let priceVal = homePages.filter(
      (pro) => pro.price === val || pro.price > val
    );
    setAllPro(priceVal);
    setShopColor(val);
    window.scrollTo(0, 300);
  };

  const noProduct = () => {
    alert("COMING SOON");
  };
  const handleSearchProducts = useCallback(
    debounce((searchitem) => {
      const search = homePages.filter((pro) =>
        pro.type.toLowerCase().includes(searchitem.toLowerCase())
      );
      if (search.length == 0) {
        setMatch(true);
      } else {
        setMatch(false);
      }
      setAllPro(search);
    }, 300),
    [homePages]
  );
  useEffect(() => {
    handleSearchProducts(searchitem);
  }, [searchitem, handleSearchProducts]);

  return (
    <div>
      <div className="shop">
        <h1 className="text-dark  shop-header">Shop-now</h1>
      </div>
      <div className="shop-items container mt-5 p-3">
        <div className="col-md-12 search-items mb-5 ">
          <input
            type="text"
            placeholder="search for a product"
            value={searchitem}
            onChange={handelSearch}
          />
          <div className="search-icons">
            <FaSearch />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 d-none d-md-block ">
            <h4>Product categories</h4>
            <div className="shop-list">
              <ul>
                <li
                  onClick={() => handleProduct("chair")}
                  className={`${shopColor === "chair" ? "add-color" : ""}`}
                >
                  Chair
                </li>
                <li
                  onClick={() => handleProduct("table")}
                  className={`${shopColor === "table" ? "add-color" : ""}`}
                >
                  Tables
                </li>
                <li
                  onClick={() => handleProduct("sofa")}
                  className={`${shopColor === "sofa" ? "add-color" : ""}`}
                >
                  Sofas
                </li>
                <li onClick={noProduct}>Outdoor</li>
                <li
                  onClick={() => handleProduct("bed")}
                  className={`${!shopColor === "bed" ? "add-color" : ""}`}
                >
                  Beds
                </li>
                <li
                  onClick={() => handleProduct("light")}
                  className={`${shopColor === "light" ? "add-color" : ""}`}
                >
                  Lighting
                </li>
                <li onClick={noProduct}>Decor</li>
              </ul>
            </div>
            <div className="filer-price">
              <h4>Filter By Price</h4>
              <ul>
                <li
                  onClick={() => price(100)}
                  className={shopColor === 100 ? "add-color" : ""}
                >
                  $50
                </li>
                <li
                  onClick={() => price(200)}
                  className={shopColor === 200 ? "add-color" : ""}
                >
                  $100
                </li>
                <li
                  onClick={() => price(300)}
                  className={shopColor === 300 ? "add-color" : ""}
                >
                  $200
                </li>
                <li
                  onClick={() => price(400)}
                  className={shopColor === 400 ? "add-color" : ""}
                >
                  $300
                </li>
                <li
                  onClick={() => price(500)}
                  className={shopColor === 500 ? "add-color" : ""}
                >
                  $400
                </li>
              </ul>
            </div>
            <div className="filter-color">
              <h4>Filter By Color</h4>
              <ul>
                <li
                  onClick={() => handelColor("black")}
                  className={`${shopColor === "black" ? "add-color" : ""}`}
                >
                  Black
                </li>
                <li
                  onClick={() => handelColor("red")}
                  className={`${shopColor === "red" ? "add-color" : ""}`}
                >
                  Red
                </li>
                <li
                  onClick={() => handelColor("white")}
                  className={`${shopColor === "white" ? "add-color" : ""}`}
                >
                  White
                </li>
                <li
                  onClick={() => handelColor("blue")}
                  className={`${shopColor === "blue" ? "add-color" : ""}`}
                >
                  Blue
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 mt-2">
            <div className="text-center">
              {match && (
                <h1 className="text-secondary text-center">
                  No Matched Product
                </h1>
              )}
            </div>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-4">
                {allpro.map((product, index) => (
                  <div key={index} className="col m-auto">
                    <div className="image-box">
                      <Link to={`/details2/${product.id}`}>
                        <img src={product.img} alt="" />
                      </Link>
                      <div className="cart-icon">
                        <div className="cart-icons">
                          <FaCartPlus
                            className="cartd"
                            onClick={() => handelAddToCart(product.id)}
                          />
                        </div>

                        <div className="heart-div">
                          <FaHeart
                            className={`heartd ${
                              likedProducts[index] ? "active" : ""
                            }`} // Add 'active' class if liked
                            onClick={() => handleLove(index)}
                          />
                        </div>
                      </div>
                      <p className="text-center text-secondary pro-txt">
                        {product.txt}
                      </p>
                      <div className="d-flex justify-content-center prices">
                        <p className="text-danger">{product.price}</p>
                        <p className="text-center">{product.oldPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
