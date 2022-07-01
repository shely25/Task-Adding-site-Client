import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Ctask = () => {
    const [ctask, setCtask] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`https://hydro-leaf-72466.herokuapp.com/Completetask?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCtask(data))
    }, [])
    console.log(ctask)

    return (
        <div>
            <h1 className='text-2xl font-semibold text-center my-5'>Completed Task</h1>
            <div className='text-center'>
                {
                    ctask?.completedTask?.map(item => <li>{item}</li>)
                }
            </div>
        </div>
    );
};

export default Ctask;