import './Demo.css'
import singerPic from '../../assets/Yahli_Sobol.jpg'
import type { ChangeEvent } from 'react'

export default function Demo() {


    function sayHi() {
        alert('hi')
    }

    function selectionChanged(event: ChangeEvent<HTMLInputElement>) {
        alert('selection changed    ' + event.target.value)
    }

    return (
        <div className='Demo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Yahli_Sobol.jpg" />
            <img src={singerPic} />
            <button onClick={sayHi}>say hi</button>
            <select onChange={selectionChanged}>
                <option value="usd">USD</option>
                <option value="ils">ILS</option>
                <option value="eur">EUR</option>
            </select>
        </div>
    )
}