import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#e3f2fd] bg-opacity-50'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayouts;