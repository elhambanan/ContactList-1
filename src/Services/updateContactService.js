import http from "./httpService";

export default function updateContact(id, data) {
    return http.get(`/contacts/${id}`, data)
}