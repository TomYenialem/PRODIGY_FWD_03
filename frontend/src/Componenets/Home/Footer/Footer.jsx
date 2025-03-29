import React, { useState } from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import toast from "react-hot-toast";

export default function () {
  const[email,setEmail]=useState('')
const[subscribed,setSubscribed]=useState(false)
  const handleSubmit=()=>{
    if(!email){
      toast.error('please type your email')
      return;
    }
       if (!email.includes("@") || !email.includes(".")) {
         toast.error("Please enter a valid email address");
         return;
       } else {
         toast.success("subscribed thank you");
         setEmail('');
         setSubscribed(true);

       }

  }
  return (
    <div className="footer p-4 mt-5">
      <div className="container ">
        <div className="row  sm-justifiy-content-center pt-4 mb-5">
          <div className="col-md details sm-d-flex flex-column align-items-center">
            <h1>viist our showRoom</h1>
            <p> Addis Abeba ,Ethiopia</p>
          </div>
          <div className="form col-md">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
              <button
            
                className="btn btn-warning text-light"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
                disabled={subscribed }
              >
                {
                  subscribed? (
                    <span className="text-success ">Subscribed</span>
                  ) : (
                    <span className="text-dark">Subscribe</span>
                  )
                }
               
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row second-row">
          <div className="col-md">
            <h3>Opening Time</h3>
            <p>Mon – Fri: 8AM – 10PM</p>
            <p>Sat: 9AM-8PM</p>
            <p>Sun: Closed</p>
            <p>We Work All The Holidays</p>
          </div>
          <div className="col-md">
            <h3>Quick Link</h3>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shope</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li></li>
          </div>
          <div className="col-md">
            <h3>Information</h3>
            <p> About Us</p>
            <p> Shopping Guide</p>
            <p> Delivery Information</p>
            <p> Privacy Policy</p>
            <p> Our Store</p>
          </div>
          <div className="col-md-5">
            <h2>123 Widget Street Acmeville, AC-1209</h2>
            <span>
              <MdEmail className="text-warning m-2" />
            </span>
            <span>tom21g2008@gmail.com</span> <br />
            <span>
              <BiPhone  className="text-warning m-2"/>
            </span>{" "}
            <span> +251923685549</span>
          </div>
        </div>
      </div>
    </div>
  );
}
