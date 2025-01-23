import axios from "axios";

let api = axios.create({
    baseURL : "http://localhost:3000/students"
})

export default api;