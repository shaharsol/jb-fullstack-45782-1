import { useContext } from "react"
import AuthContext from "../components/auth/auth/AuthContext"
import type AuthAware from "../services/auth-aware/AuthAware"

export default function useService<T extends AuthAware>(Service: { new(jwt: string): T }): T {
    const authContext = useContext(AuthContext)

    const service = new Service(authContext!.jwt)

    return service
}