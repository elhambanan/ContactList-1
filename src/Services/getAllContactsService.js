import http from "./httpService";

export default function getAllContacts() {
    return http.get("/contacts")
}