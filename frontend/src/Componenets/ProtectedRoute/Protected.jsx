import React, { useContext, useEffect } from 'react'
import { contextApi } from '../Context/Context'
import { useNavigate } from 'react-router-dom'

function Protected({msg,rediretTo}) {
    const {authUser}=useContext(contextApi)
    const navigate=useNavigate()
useEffect(() => {
  if (!authUser) {
    console.log("Redirecting to login with state:", { msg, rediretTo });
    navigate("/login", { state: { msg, rediretTo } });
  }
}, [authUser, msg, rediretTo, navigate]);

}

export default Protected