import { useContext, useMemo } from "react"
import AuthContext from "../components/auth/auth/AuthContext"
import { jwtDecode } from "jwt-decode"

export default function useUserId() {
    const authContext = useContext(AuthContext)

    const id = useMemo(() => {
        if (authContext?.jwt) {
            const { id } = jwtDecode<{ id: string }>(authContext.jwt)
            return id
        }
    }, [authContext])

    return id

}