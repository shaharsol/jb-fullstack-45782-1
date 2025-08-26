import Header from '../header/Header'
import './Layout.css'

export default function Layout() {
    return (
        <div className='Layout'>
            <header>
                <Header />
            </header>
            <aside>
                following
            </aside>
            <aside>
                followers
            </aside>
            <main>
                main
            </main>
            <footer>
                footer
            </footer>

        </div>
    )
}