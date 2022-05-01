import http from "./httpService";

 export default function addOneContact(id) {
     return http.get(`/contacts/${id}`)
 }