import React from "react";
import "./Back.css";
import { Link } from "react-router-dom";

export default function Back() {
  return (
    <div className="text-center bg">
      <h1 className="display-4 ">Creative Design</h1>
      <h1 className="display-4">Modern and Exculisve Design</h1>
      <Link to={"/shop"}>
        <button className="mt-3">Shop now</button>
      </Link>
    </div>
  );
}
