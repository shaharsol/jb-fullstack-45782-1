import { createContext } from "react"

interface AuthContextInterface {
    jwt: string,
    setJwt: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextInterface | null>(null)
export default AuthContext

