import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout/Layout'
import './App.css'
import store from '../../redux/store'
import { Provider as Redux } from 'react-redux'

function App() {

    return (
        <BrowserRouter>
            <Redux store={store}>
                <Layout />
            </Redux>
        </BrowserRouter>
    )
}

export default App
