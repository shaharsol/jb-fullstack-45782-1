import { useState } from 'react'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import './Login.css'
import { useForm } from 'react-hook-form'
import type LoginModel from '../../../models/login'
import authService from '../../../services/auth'

export default function Login() {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const { register, handleSubmit } = useForm<LoginModel>()

    async function submit(login: LoginModel) {
        try {
            setIsSubmitting(true)
            const jwt = await authService.login(login)
            console.log(jwt)
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(submit)}>

                <input placeholder='username' {...register('username')} />
                <input placeholder='password' type="password" {...register('password')} />
                <SpinnerButton
                    buttonText='Login'
                    loadingText='logging in'
                    isSubmitting={isSubmitting}
                />
            </form>
        </div>
    )
}