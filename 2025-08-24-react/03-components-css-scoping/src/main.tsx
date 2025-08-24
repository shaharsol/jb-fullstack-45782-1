import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Oren from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <p>hello world from main</p>
        <Oren />
    </StrictMode>,
)
