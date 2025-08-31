import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'
import './Layout.css'

export default function Layout() {
    return (
        <div className='Layout'>
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
            <footer>
                <Footer />
            </footer>
        </div>
    )
}