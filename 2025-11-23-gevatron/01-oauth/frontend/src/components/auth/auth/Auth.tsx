import { useEffect, useState, type PropsWithChildren } from "react";
import AuthContext from "./AuthContext";
import { useSearchParams } from "react-router-dom";

export default function Auth(props: PropsWithChildren) {

    const [jwt, setJwt] = useState<string>(localStorage.getItem('jwt') || '');

    const { children } = props;

    const [searchParams] = useSearchParams()

    function newJwt(jwt: string) {
        setJwt(jwt);
        localStorage.setItem('jwt', jwt);
    }

    useEffect(() => {
        if(searchParams.get('jwt')) {
            newJwt(searchParams.get('jwt')!)
        }
    }, [searchParams])

    return (
        <AuthContext.Provider value={{ jwt, newJwt }}>
            {children}
        </AuthContext.Provider>
    );
}