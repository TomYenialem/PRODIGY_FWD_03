import axios from  'axios'

const axiosBase = axios.create({
  baseURL: "http://localhost:3000/",
//   baseURL: "https://furnture.onrender.com",
});

export default axiosBase;