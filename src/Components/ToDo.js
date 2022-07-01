import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const ToDo = () => {
    const [tasks, setTasks] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/taskOne?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    console.log(tasks.Task)
    return (
        <div>
            <h1 className='text-center my-8 text-5xl font-semibold'>{tasks.Name}'s tasks</h1>
            <div className='text-center'>
                {
                    tasks.Task.map(task => <div className='flex justify-center'><input type='checkbox'></input> <p className='ml-2'>{task}</p></div>)
                }
            </div>
        </div>
    );
};

export default ToDo;