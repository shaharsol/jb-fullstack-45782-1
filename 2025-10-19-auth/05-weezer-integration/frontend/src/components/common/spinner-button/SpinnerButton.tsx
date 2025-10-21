import './SpinnerButton.css';
import spinnerSource from '../../../assets/loading1.gif';

interface SpinnerButtonProps {
    buttonText: string
    loadingText: string
    isSubmitting: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function SpinnerButton(props: SpinnerButtonProps) {

    const { buttonText, loadingText, isSubmitting, onClick } = props;
    return (
        <div className='SpinnerButton'>
            {!isSubmitting && <button onClick={onClick}>{buttonText}</button>}
            {isSubmitting && <span>{loadingText}...<i><img src={spinnerSource} /></i></span>}
        </div>
    );
}