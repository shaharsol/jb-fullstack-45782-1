import { NavLink } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import AuthContext from '../../auth/auth/AuthContext'
import useUsername from '../../../hooks/use-username'

export default function Header() {
    const authContext = useContext(AuthContext)

    const name = useUsername()

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