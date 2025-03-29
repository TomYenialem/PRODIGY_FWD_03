import React, { useContext, useState } from "react";
import { contextApi } from "../Context/Context";
import homePages from "../../assets/images/asset";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    addCart,
    removeCart,
    total,
    authUser,
    setCountry,
    country,
    add,
    allproduct,
  } = useContext(contextApi);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const hasNoProducts = allproduct.length === 0; // This checks if the cart is empty

  return (
    <div>
      {!hasNoProducts ? (
        <div>
          {/* Cart with Products */}
          <div>
            {allproduct.map((pro, index) => (
              <div className="container mt-3" key={index}>
                <div className="row bg-dark text-light px-2 py-3 fw-bold  d-none d-md-flex">
                  <div className="col-md">Images</div>
                  <div className="col-md">Products</div>
                  <div className="col-md">Price</div>
                  <div className="col-md">Quantity</div>
                  <div className="col-md">Total</div>
                  <div className="col-md">Remove</div>
                </div>
                <div className="row mt-3">
                  <div className="col-md responsive-text">
                    <img src={pro.img} alt="Product-Image" />
                  </div>
                  <div className="col-md">{pro.txt}</div>
                  <div className="col-md carttt">
                    <span className="titles-cart">price:</span>${pro.price}
                  </div>
                  <div className="col-md carttt">
                    {" "}
              
                      <span className="titles-cart">Quantity:</span>
                      {pro.quantity}
      
                  </div>
                  <div className="col-md carttt">
                    <span n className="titles-cart">
                      Total:
                    </span>
                    ${pro.quantity * pro.price}
                  </div>
                  <div
                    className="col-md delete carttt"
                    onClick={() => removeCart(pro.id)}
                  >
                    <span className="titles-cart">remove:</span>
                    <RiDeleteBin5Line />
                  </div>
                  <hr />
                </div>
              </div>
            ))}
          </div>

          {/* Shipping and Checkout */}
          <div className="container">
            <div className="row mt-4">
              <div className="col-md">
                <h3>Calculate Shipping</h3>
                <div className="row">
                  <div className="col-md">
                    <select
                      style={{ padding: "10px", width: "120px" }}
                      onChange={handleChange}
                      value={country}
                    >
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="FRANCE">FRANCE</option>
                      <option value="CHINA">CHINA</option>
                      <option value="ETHIOPIA">ETHIOPIA</option>
                    </select>
                  </div>
                  <div className="col-md">
                    <select style={{ padding: "10px", width: "120px" }}>
                      <option value="">NYC</option>
                      <option value="">LONDON</option>
                      <option value="">PARIS</option>
                      <option value="">BEJIG</option>
                      <option value="">ADDIS</option>
                    </select>
                  </div>
                </div>

                <button
                  className="bg-dark col-md-12 mt-5 text-secondary"
                  disabled
                >
                  Estimate
                </button>
              </div>
              <div className="col-md">
                <div className="cart">
                  <h3 className="mb-4">Cart Summary</h3>
                  <div className="row total-carts">
                    <div className="col-md">
                      <div className="col-md">Sub Total</div>
                      <div className="col-md">Shipping Cost</div>
                      <div className="col-md">
                        <h4>Grand Total</h4>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="col-md">${total()}</div>
                      <div className="col-md">$5</div>
                      <div className="col-md">
                        <h4>${total() + 5}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to={`${authUser && add > 0 ? "/payments" : "/login"}`}>
                  <button className="bg-dark mt-5 col-md-12 fw-bold">
                    CheckOut
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 text-center text-danger fw-bold">
          <p className="fs-3">NO PRODUCT ADDED YET</p>
          <Link to={"/shop"}>
            <button className="bg-dark">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
