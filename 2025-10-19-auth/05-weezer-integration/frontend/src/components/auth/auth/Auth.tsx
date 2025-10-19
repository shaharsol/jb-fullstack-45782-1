import { useState, type PropsWithChildren } from "react";
import AuthContext from "./AuthContext";

export default function Auth(props: PropsWithChildren) {

    const [jwt, setJwt] = useState<string>(localStorage.getItem('jwt') || '')

    const { children } = props

    function newJwt(jwt: string) {
        setJwt(jwt)
        localStorage.setItem('jwt', jwt)
    }

    return (
        <AuthContext.Provider value={{ jwt, newJwt }}>
            {children}
        </AuthContext.Provider>
    )
}