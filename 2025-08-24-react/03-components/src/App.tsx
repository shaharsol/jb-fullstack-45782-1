import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Oren() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <p>
                hello from component2
            </p>
            <p>
                hello from component
            </p>
        </div>
    )
}

export default Oren
