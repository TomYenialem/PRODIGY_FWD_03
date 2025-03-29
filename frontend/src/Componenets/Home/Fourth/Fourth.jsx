import React from "react";
import "./Fourth.css";
import { BsAirplane } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";
import { IoReturnUpBackSharp } from "react-icons/io5";

export default function Fourth() {
  return (
    <div className="fourth mb-3">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex align-items-center one">
            <div className="icon-container bg-dark p-3 text-light p-sm-0">
              <BsAirplane />
            </div>
            <div className="text-container">
              <h3>Free home delivery</h3>
              <p>Provide free home delivery for</p>
              <p>the all product over $100</p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center two">
            <div className="icon-container  bg-dark  p-3 p-sm-0">
              <MdHighQuality />
            </div>
            <div className="text-container">
              <h3>Quality Products</h3>
              <p>We ensure the product quality</p>
              <p>that is our main goal</p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center three">
            <div className="icon-container bg-dark p-3 text-light p-sm-0">
              <IoReturnUpBackSharp />
            </div>
            <div className="text-container">
              <h3>3 Days Return</h3>
              <p>Provide free home delivery for</p>
              <p>the all product over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
