import React, { useContext, useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SiSlashdot } from "react-icons/si";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utility/Firebase";
import { PulseLoader  } from 'react-spinners'
import { useLocation, useNavigate } from "react-router-dom";
import { contextApi } from "../Context/Context";

export default function Login() {
  const {userInfo,setUserInfo}=useContext(contextApi)
  const [login, setLogin] = useState(true);
  const [loading,setLoading] = useState(false);
  const location=useLocation()
  console.log(location)
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    confirm: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    pass: "",
    confirm: "",
  });
  const [fieldStyles, setFieldStyles] = useState({
    name: "1px solid black",
    email: "1px solid black",
    pass: "1px solid black",
    confirm: "1px solid black",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [borderColor, setBorderColor] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTabSwitch = (isLogin) => {
    setLogin(isLogin);
    setBorderColor(isLogin);
  };




  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (formData.email.includes("@gmail.com") && formData.pass !== "") {
      try {
        setLoading(true);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.pass
        );

        const user = userCredential.user;
        setUserInfo([user]);

        console.log("Logged in user:", user); 
        setLoading(false);
        navigate(location?.state?.rediretTo||'/');
        toast.success("Successfully logged in");
      } catch (error) {
        toast.error(error.code);
        setLoading(false);
      }
    } else {
      toast.error("Please fill the input correctly");
    }
  };
  const createAccount=async(e)=>{
    e.preventDefault();
    if(formData.pass!==formData.confirm){
      toast.error("Passwords do not match")
      return;
    }
    if (formData.email.includes("@gmail.com") && formData.pass!== "") {
      try {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, formData.email, formData.pass)
        .then((user)=>{
          userInfo=[user]
        })
        setLoading(false)
         setLogin(true);
        toast.success("Successfully created an account");
      } catch (error) {
        toast.error(error.code);
          setLoading(false);
        console.log(error)
      }
    } else {
      toast.error("Please fill the input correctly");
      setFieldStyles('1px solid red')

    }
  }

  return (
    <div>
      <div className="container">
        <div className="contact-bg mt-5">
          <h2 className="fs-1">BE ONE OF US</h2>
          <h5 className="text-secondary">+251923685549</h5>
        </div>
        <hr/>
      </div>
      <div className="container mt-3 col-md-6">
        <div className="rejester">
          <h2
            onClick={() => handleTabSwitch(true)}
            className={borderColor ? "addBorder" : ""}
          >
            Login
          </h2>
          <span className="slash">
            <SiSlashdot />
          </span>
          <h2
            onClick={() => handleTabSwitch(false)}
            className={borderColor ? "" : "addBorder"}
          >
            Register
          </h2>
        </div>

        {login ? (
          <div>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3 mt-3">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ border: fieldStyles.email }}
                />
                <small className="text-danger">{formErrors.email}</small>
              </div>
              <div className="mb-3 password">
                <label>Password:</label>
                <input
                  type={!showPassword ? "text" : "password"}
                  name="pass"
                  className="form-control"
                  placeholder="Enter password"
                  value={formData.pass}
                  onChange={handleInputChange}
                  style={{ border: fieldStyles.pass }}
                />
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </p>
                <small className="text-danger">{formErrors.pass}</small>
              </div>
              <button type="submit" className="btn btn-dark text-white">
                {loading ? <PulseLoader  size={10} color="white"/> : " Login"}
              </button>
            </form>
          </div>
        ) : (
          <form onSubmit={createAccount}>
            <div className="mb-3 mt-3">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ border: fieldStyles.name }}
              />
              <small className="text-danger">{formErrors.name}</small>
            </div>
            <div className="mb-3 mt-3">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ border: fieldStyles.email }}
              />
              <small className="text-danger">{formErrors.email}</small>
            </div>
            <div className="mb-3 password">
              <label>Password:</label>
              <input
                type={!showPassword ? "text" : "password"}
                name="pass"
                className="form-control"
                placeholder="Enter password"
                value={formData.pass}
                onChange={handleInputChange}
                style={{ border: fieldStyles.pass }}
              />
              <p onClick={() => setShowPassword(!showPassword)} className="eye">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
              <small className="text-danger">{formErrors.pass}</small>
            </div>
            <div className="mb-3">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirm"
                className="form-control"
                placeholder="Confirm password"
                value={formData.confirm}
                onChange={handleInputChange}
                style={{ border: fieldStyles.confirm }}
              />
              <small className="text-danger">{formErrors.confirm}</small>
            </div>
            <button type="submit" className="btn btn-dark text-white mt-3">
              {loading ? <PulseLoader  size={10} color="white"/> : " Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
