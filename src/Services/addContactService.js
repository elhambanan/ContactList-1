import http from "./httpService";

export function addNewContact (data) { 
    return http.post("/contacts", data)
}