import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

// axios.interceptors.request.use(
//     (request) => {
//         console.log(request);
//         // Edit request ...
//         return request;
//     }, 
//     (error)=>{
//         console.log(error);
//         return Promise.reject();
//     })

// axios.interceptors.response.use(
//     (response) => {
//         console.log(response);
//         // Edit response ...
//         return response;
//     }, 
//     (error)=>{
//         console.log(error);
//         return Promise.reject();
//     })


const http = {
    get : axios.get,
    post : axios.post, 
    put: axios.put,
    delete : axios.delete,
}
export default http;