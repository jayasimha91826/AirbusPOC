import axios from "axios";
const REACT_BASE_URL = process.env.REACT_APP_API_URL;
const api =axios.create({
    baseURL:"https://6332cfeda54a0e83d25909d3.mockapi.io/",
    headers:{
        "Content-Type":"application/json",

    },
});

api.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.error('API error:',error);
        return Promise.reject(error);
    }
);
export default api;