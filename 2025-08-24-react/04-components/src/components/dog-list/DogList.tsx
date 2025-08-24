import Jimmie from '../jimmie/Jimmie'
import Ray from '../ray/Ray'
import './DogList.css'

export default function DogList() {
    return (
        <div className='DogList'>
            <Ray />
            <Jimmie />
        </div>
    )
}