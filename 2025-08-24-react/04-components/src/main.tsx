import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <p>hello world from main</p>
        <App />
    </StrictMode>,
)
