import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Calender from './Calender';

const Home = () => {
    const [tasks, setTasks] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/taskOne?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center mt-6'>Welcome To Your Daily Task</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-24'>
                <div class="overflow-x-auto flex items-center">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks?.Task?.map((task, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{task}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <Calender></Calender>
                </div>
            </div>
        </div>
    );
};

export default Home;