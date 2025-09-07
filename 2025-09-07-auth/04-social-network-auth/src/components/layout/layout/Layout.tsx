import { useState } from 'react'
import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'
import './Layout.css'
import Login from '../../auth/login/Login'

export default function Layout() {

    const [isLoggedIn] = useState<boolean>(false)

    return (
        <div className='Layout'>

            {isLoggedIn && <>
                <header>
                    <Header />
                </header>
                <aside>
                    <Following />
                </aside>
                <aside>
                    <Followers />
                </aside>
                <main>
                    <Main />
                </main>
            </>}

            {!isLoggedIn && <Login />}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}