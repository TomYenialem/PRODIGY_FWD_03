import React, { useContext } from "react";
import "./First.css";

import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="text-center mt-5 first mb-4 ">
      <div className="container ">
        <div className=" row justify-content-center ">
          <div className="col-md left">
            <div className="mt">
              <h1 className="text-warning off">Office Furniture</h1>
              <Link to={"/office"}>
                <button className="mt-4 home-btn">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="col-md right">
            <div className="mt">
              <h1 className="text-warning off">Home Furniture</h1>

              <Link to={"/toHome"}>
                {" "}
                <button className="mt-4 home-btn">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
