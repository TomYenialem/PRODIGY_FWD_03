import React, { useContext, useState } from "react";
import { contextApi } from "../Context/Context";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import "./Payment.css";
import toast from "react-hot-toast";
import axiosBase from "../Api/Api";
import { useNavigate } from "react-router-dom";


function Payment() {
  const[loader,setLoader]=useState(false)
  const [err,setErr]=useState('')
  const navigate=useNavigate()
  const { authUser, add, country, setAdd,allproduct,total } = useContext(contextApi);
 const stripe = useStripe();
 const elements = useElements();
    const handleChange = (e) => {
      if (e?.error?.message) {
        setErr(e?.error?.message);
      } else {
        setErr("");
      }
    };

      const handleSubmit = async (e) => {
        setLoader(true);
        e.preventDefault();
        //  geting client secret
        try {
          const res = await axiosBase({
            method: "POST",
            url: `/payemnt/create?total=${add}`,
            responseType: "json",
          });

          // console.log(res.data);
          const clientSecret = res.data;

          // confirmation
          const { paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: elements.getElement(CardElement),
              },
            }
          );

          console.log(paymentIntent);
          toast.success(paymentIntent.status);

          // connect to data bas

         

          setLoader(false);
          navigate('/')
          setAdd(0)


          // console.log(confirmation)
          // console.log(paymentIntent);
        } catch (error) {
          toast.error(error.message);
          setLoader(false);
        }
      };
  return (
    <>
      <div className="payment">
        <p className="address">payment Address:</p>
        <p className="email">
          email:
          <strong>{authUser?.email}</strong>
          <br />
          <p>
            Country:
            <strong>
              {country ? (
                country
              ) : (
                <small style={{ color: "red" }}>No country selected</small>
              )}
            </strong>
          </p>
        </p>
        <p className="amount">
          total amount:
          <br />
          <strong>{add}</strong>
        </p>
        <p className="amount">
          total price:
          <br />
          <strong>{`$ ${total()}`}</strong>
        </p>
      </div>
      <hr />
      <div className="stripe">
        <form>
          {err && <p className="error">{err}</p>}
          <CardElement onChange={handleChange} />
          <button
            disabled={loader || add == 0}
            onClick={handleSubmit}
            className="pay-btn"
          >
            {loader ? "Loading..." : "Pay Now"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Payment;
