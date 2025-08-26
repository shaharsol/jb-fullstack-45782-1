import { useEffect, useState } from 'react'
import './Demo.css'

export default function Demo() {

    const [animals, setAnimals] = useState<string[]>([])
    const [isDogs, setIsDogs] = useState<boolean>(true)

    function getDogs() {
        return ['Ray', 'Jimmie']
    }

    function getCats() {
        return ['Lichi', 'Mitzi']
    }

    useEffect(() => {
        setAnimals(isDogs ? getDogs() : getCats())
    }, [isDogs])

    function selectChanged() {
        setIsDogs(!isDogs)
    }

    return (
        <div className='Demo'>
            <select onChange={selectChanged}>
                <option value="dogs">Dogs</option>
                <option value="cats">Cats</option>
            </select>
            <ul>
                {animals.map(animal => <li key={animal}>{animal}</li>)}
            </ul>
        </div>
    )

}