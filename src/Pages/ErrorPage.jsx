import Lottie from 'lottie-react';
import React from 'react';
import errorAnimationData from '../../src/assets/lottie/error.json'
import { Navigate, NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <div className='w-80 mx-auto pt-12'>
                <Lottie animationData={errorAnimationData}></Lottie>
            </div>
            <div className='w-full mx-auto flex justify-center'>
                <NavLink className='p-3 bg-green-200 rounded-lg  font-bold hover:bg-green-400 duration-300' to={'/'}>Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;