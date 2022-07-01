import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        const tasks = { Task: data.task }
        console.log(tasks)
        const url = `https://hydro-leaf-72466.herokuapp.com/tasks?email=${user.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tasks),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }
    return (
        <div className='text-center'>
            <h1 className='my-8 text-2xl font-medium'>Add Task</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Your Task" className="input input-bordered  w-full max-w-xs my-5 " {...register("task")} />
                <br />
                <input className='btn' type="submit" value="Add task" />
            </form>
        </div>
    );
};

export default AddTask;