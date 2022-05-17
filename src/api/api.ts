import {instance} from "../instances/instances";
import axios from "axios";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
            .catch(err => {
                console.warn(err)
            })
    },

    follow(userId: string, postData: {}){
        return instance
            .post(`follow/${userId}`, postData)
    },

    unfollow(userId: string){
        return instance
            .delete(`follow/${userId}`)
    },

    getProfile(userId: string | number) {
        return instance
            .get(`profile/${userId}`)
    },


}

export const authAPI = {
    getMe() {
        return instance
            .get(`auth/me`)
    }
}