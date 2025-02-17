import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/allValue.png';
import style from './Navbar.module.css';

const LiveTimeTracker = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
    };

    const formatDay = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    return (
        <div className='d-flex align-items-center gap-3'>
            <p className='time m-0'>{formatTime(currentTime)}</p>
            <p className='m-0'>|</p>
            <p className='day m-0'>{formatDay(currentTime)}</p>
            <p className='m-0'>|</p>
            <p className='date m-0'>{formatDate(currentTime)}</p>
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-between pt-4 w-75 m-auto mb-4'> 
            {/* logo */}
            <img src={logo} alt="AllDay Logo" />
            {/* time, day, date */}
            <LiveTimeTracker />
        </nav>
    );
};

export default Navbar;

