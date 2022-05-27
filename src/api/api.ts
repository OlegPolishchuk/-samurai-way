import {instance} from "../instances/instances";


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
        console.warn('Please use profileAPI')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string | number) {
        return instance
            .get(`profile/${userId}`)
    },
    getStatus(userId: string | number) {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status`, {status})
    }
}

export const authAPI = {
    getMe() {
        return instance
            .get(`auth/me`)
    }
}