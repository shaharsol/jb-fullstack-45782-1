import './Spinner.css'
import spinnerSource from '../../../assets/loading1.gif'

export default function Spinner() {
    return (
        <div className='Spinner'>
            <img src={spinnerSource} />
        </div>
    )
}