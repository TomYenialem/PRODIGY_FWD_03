import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextApi } from "../../Context/Context";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import homePages from "../../../assets/images/asset";
import "./ToHome.css";

export default function ToOffice() {
  const office = homePages.filter((pro) => pro.type === "office");
  const { products, handelAddToCart } = useContext(contextApi);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 header">
        Welcome To Our Office Furnitures
      </h1>

      <div className="container promt-5">
        <div className="row row-cols-1 row-cols-md-4 gy-4 mt-5 ">
          {office.map((product) => (
            <div key={product.id} className="col m-auto">
              <div className="image-box">
                <Link to={`/details/${product.id}`}>
                  <img src={product.img} alt="" />
                </Link>
                <div className="cart-icon">
                  <div className="cart-icons">
                    <FaCartPlus
                      className="cartd"
                      onClick={() => handelAddToCart(product.id - 1)}
                    />
                  </div>

                  <div className="heart-div">
                    <FaHeart className="heartd" />
                  </div>
                </div>
                <p className="text-center text-secondary pro-txt">
                  {product.txt}
                </p>
                <div className="d-flex justify-content-center prices text">
                  <p className="text-danger">{product.price}</p>
                  <p className="text-center">{product.oldPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-dark text-light">
          <Link to={"/toHome"} className="text-light">
            More Products
          </Link>
        </div>
      </div>
    </div>
  );
}
