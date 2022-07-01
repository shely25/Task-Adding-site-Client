import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from "react-social-login-buttons";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    let errorElement;
    if (error) {
        errorElement = error?.message

    }
    if (user) {
        navigate(from, { replace: true })
        console.log(user)
    }
    return (
        <div>
            <div className="divider w-96 mx-auto">OR</div>
            <p>{errorElement}</p>
            <div className='w-96 mx-auto'><GoogleLoginButton onClick={() => signInWithGoogle()} ></GoogleLoginButton></div>
        </div>
    );
};

export default SocialLogin;