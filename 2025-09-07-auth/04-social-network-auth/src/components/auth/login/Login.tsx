import { useState } from 'react'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import './Login.css'
import type Login from '../../../models/login'
import { useForm } from 'react-hook-form'
import type Login from '../../../models/login'

export default function Login() {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const { register, handleSubmit, reset, formState } = useForm<Login>()

    async function submit(login: Login) {

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