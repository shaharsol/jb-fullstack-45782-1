import './Footer.css';
import useUsername from '../../../hooks/use-username';

export default function Footer() {

    const name = useUsername();

    return (
        <div className='Footer'>
            (c) copyrights Wizzer | you are {name} |Server address: {import.meta.env.VITE_REST_SERVER_URL}
        </div>
    );
}