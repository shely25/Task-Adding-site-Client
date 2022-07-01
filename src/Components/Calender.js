import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [value, onChange] = useState(new Date());
    console.log(typeof (value))
    return (
        <div><div className='mt-24 flex justify-center items-center'>
            <Calendar onChange={onChange} value={value} />

        </div>
            <p className='text-center mt-2'><span className='font-bold'>Today:</span> {value.toDateString()} </p>

        </div>
    );
};

export default Calender;