import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const ToDo = () => {
    const [tasks, setTasks] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`https://hydro-leaf-72466.herokuapp.com/taskOne?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    const Handler = event => {
        if (event.target.checked) {
            const removetask = { Rtask: event.target.value }
            const url = `https://hydro-leaf-72466.herokuapp.com/removeTask?email=${user.email}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(removetask),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            const url2 = `https://hydro-leaf-72466.herokuapp.com/checkedTask?email=${user.email}`
            fetch(url2, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(removetask),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });


        }

    }
    console.log(tasks.Task)
    return (
        <div>
            <h1 className='text-center my-8 text-5xl font-semibold'>{tasks.Name}'s tasks</h1>
            <div className='text-center'>
                {
                    tasks?.Task?.map(task => <div className='flex justify-center'><input onChange={Handler} value={task} type='checkbox'></input> <p className='ml-2'>{task}</p></div>)
                }
            </div>
        </div>
    );
};

export default ToDo;