import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
    const from = location.state?.from?.pathname || '/'
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement1
    if (error || Uerror) {
        errorElement1 = <div>
            <p className='text-center text-danger'>Error: {error.message || Uerror.message}</p>
        </div>
    }

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.Name })
        const url = 'https://hydro-leaf-72466.herokuapp.com/tasks'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Email: data.email, Name: data.Name, Task: [] }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

    };
    if (loading || updating) {
        return (
            <p>Loading....</p>
        )
    }
    if (user) {
        navigate(from, { replace: true });
        console.log(user)
    }
    return (
        <div className='text-center'>
            <h1 className='my-8 text-2xl font-medium'>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs " {...register("Name")} />
                <br />
                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs mt-5 " {...register("email")} />
                <br />
                <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs my-5" {...register("password")} />
                <br />
                <input className='btn' type="submit" value="Register" />
            </form>
            {errorElement1}

            <p className='text-center my-2'>Already have an account?<Link to='/LogIn' className='text-blue-300'>Please Log In</Link></p>
        </div>
    );
};
export default Register;