import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '23ea4800-08e7-44fb-8560-7f8ba3db811f'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`/auth/login`, { email }, { password }, { rememberMe }, { captcha })
    }
}

