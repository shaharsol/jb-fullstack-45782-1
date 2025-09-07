import './SpinnerButton.css'
import spinnerSource from '../../../assets/loading1.gif'

interface SpinnerButtonProps {
    buttonText: string
    loadingText: string
    isSubmitting: boolean
}
export default function SpinnerButton(props: SpinnerButtonProps) {

    const { buttonText, loadingText, isSubmitting } = props
    return (
        <div className='SpinnerButton'>
            {!isSubmitting && <button>{buttonText}</button>}
            {isSubmitting && <span>{loadingText}...<i><img src={spinnerSource} /></i></span>}
        </div>
    )
}