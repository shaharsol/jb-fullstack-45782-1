import axios from "axios"
import type Login from "../models/login"

class AuthService {
    async login(login: Login): Promise<{ jwt: string }> {
        const { data } = await axios.post<{ jwt: string }>(`${import.meta.env.VITE_REST_SERVER_URL}/auth/login`, login)
        return data
    }
}

const authService = new AuthService()
export default authService