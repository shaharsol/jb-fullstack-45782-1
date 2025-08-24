import Lichi from '../lichi/Lichi'
import Mitzi from '../mitzi/Mitzi'
import './CatList.css'

export default function CatList() {
    return (
        <div className='CatList'>
            <Lichi />
            <Mitzi />
        </div>
    )
}