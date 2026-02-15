import axios from "axios";

  console.log("API URL:", import.meta.env.VITE_API_URL);
  console.log("API URL:");
  const baseUrl=import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
    baseURL:baseUrl,
    withCredentials:true

})

export default axiosInstance;





