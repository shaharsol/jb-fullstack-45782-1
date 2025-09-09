import { NavLink } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import AuthContext from '../../auth/auth/AuthContext'
import { jwtDecode } from 'jwt-decode'

export default function Header() {

    const authContext = useContext(AuthContext)

    const { name } = jwtDecode<{ name: string }>(authContext!.jwt)

    function logout() {
        authContext?.newJwt('')
    }

    return (
        <div className='Header'>
            <div>logo</div>
            <nav>
                {/* <a href="/profile">Profile</a> | <a href="/feed">Feed</a> */}
                <NavLink to="/profile">Profile</NavLink> | <NavLink to="/feed">Feed</NavLink>

            </nav>
            <div>
                welcome {name} | <button onClick={logout}>logout</button>
            </div>
        </div>
    )
}