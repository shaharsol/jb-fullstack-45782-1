import { useEffect, useRef, useState } from 'react'
import './Demo.css'

export default function Demo() {
    // let firstRender = (new Date()).toLocaleTimeString()
    let firstRender = useRef<string>((new Date()).toLocaleTimeString())

    // const something = useState<string>((new Date()).toLocaleTimeString())
    // something[0] // <- state value
    // something[1] // <- state modifying function

    const [now, setNow] = useState<string>(firstRender.current)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow((new Date()).toLocaleTimeString())
            console.log('modified now variable...')
        }, 1 * 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    /*

    2nd param to use effect:
    1. no pass at all - run the effect with EVERY render
    2. pass an empty array - run ONLY at 1st render
    3. pass a non-empty array - run ONLY when one of the array items changes (reactiveness)

    */

    return (
        <div className='Demo'>
            <p>first rendered at: {firstRender.current}</p>
            {<p>time now: {now}</p>}
        </div>
    )
}