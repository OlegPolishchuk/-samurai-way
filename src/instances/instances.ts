import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'c475897d-e7c6-4b7b-b62d-8534f379a294'
    }
})