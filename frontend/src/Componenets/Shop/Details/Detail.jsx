

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import homePages from "../../../assets/images/asset";
import "./Detail.css";
import { IoIosStar } from "react-icons/io";
import { contextApi } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Detail() {
  const [cartNumber, setCartNumber] = useState(1);
  const { products, handelAddToCart } = useContext(contextApi);
  const { productId } = useParams();


  
  const handleDetailAddToCart = () => {
    // Pass the productId as a number to ensure consistency
    handelAddToCart(Number(productId), cartNumber); // Converting productId to number
  };

  // Find the product by ID (convert productId to number for comparison)
  const product = homePages.find((pro) => pro.id === Number(productId));

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md">
          <img src={product.img} alt={product.txt} style={{ width: "500px" }} />
          <div className="mt-3">
            <div className="bottom-pro mt-2">
              {products.map((product, index) => (
                <div key={index} className="bottom-img">
                  <div>
                    <Link to={`/details/${product.id}`}>
                      <img
                        src={product.img}
                        alt={product.txt}
                        style={{ width: "200px" }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md mt-5">
          <h2>{product.txt}</h2>
          <div>
            <span className="text-warning">
              <IoIosStar />
            </span>
            <span className="text-warning">
              <IoIosStar />
            </span>
            <span className="text-warning">
              <IoIosStar />
            </span>
            <span className="text-warning">
              <IoIosStar />
            </span>
            <span>
              <IoIosStar />
            </span>
            <span className="px-3">(1 customer review)</span>
          </div>
          <div className="text-dark mx-4 mt-3">
            <span className="fs-3 text-dark px-2">{product.price}</span>
            <span className="fs-3 text-dark px-4 overline-text">
              {product.oldPrice}
            </span>
          </div>
          <div className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sapiente iure quidem...
          </div>

          <div className="row mt-5">
            <button className="btn btn-dark" onClick={handleDetailAddToCart}>
              Add to Cart
            </button>
          </div>
          {/* Quantity Adjustment */}
         
        </div>
      </div>
    </div>
  );
}
