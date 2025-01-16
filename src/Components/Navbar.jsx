import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user, logout} = useContext(AuthContext)
    const [isHover, setIsHover] = useState(false)
    console.log(user)

    const links = <>
                <li> <NavLink to="/" >Home</NavLink> </li>
                <li> <NavLink to="/all-book" >All Books</NavLink> </li>
                <li> <NavLink to="/add-book" >Add Book</NavLink> </li>
                <li> <NavLink to="/borrowed-book" >Borrowed Book</NavLink> </li>
            </>

    return (
        <div className="navbar bg-[#90caf9] bg-opacity-30  ">
            <div className="navbar-start">
                <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  bg-[#e3f2fd] drop-shadow-[0_4px_6px_rgba(56,189,248,0.5)] rounded-box z-[1] mt-3 w-52 p-2 shadow-xl" >{links}</ul>
                </div>
                <p className=" font-bold text-base md:text-xl md:font-extrabold xl:text-3xl ">LibroHub</p>
            </div>
            <div className="navbar-center hidden  lg:flex ">
                <ul className="menu menu-horizontal  text-sm font-semibold">
                {links}
            </ul>
            </div>
            <div className='navbar-end'>
                {
                    user ? 
                    <div className='flex items-center gap-2 relative cursor-pointer' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        {/* Profile pic */}
                        <div className='flex items-center'>
                            <div className='h-12 w-12 xl:w-16 xl:h-16 rounded-full border-2 border-[#00b4d8]'>
                                <img className='object-cover rounded-full' src={user.photoURL} alt="Profile Pic" />
                            </div>
                        </div>
                        

                        {isHover && (
                            <div className='absolute right-0 top-12 bg-[#e3f2fd] shadow-md rounded-lg w-56 md:w-80 p-3 z-10 drop-shadow-[0_4px_6px_rgba(56,189,248,0.5)]'>
                                <div className='text-center mb-3'>
                                    <img src={user.photoURL} className='h-16 w-16 mx-auto rounded-full border-2 border-[#023e8a]'  alt="Profile pic" />
                                    <p className='mt-2 text-[10px] md:text-base font-medium text-start'>Name : {user.displayName}</p>
                                    <p className='mt-2 text-[10px] md:text-base font-medium text-start'>email : {user.email}</p>
                                    <p className='mt-2 text-[8px] md:text-sm font-medium text-start'>Last Sign In : {user.metadata.lastSignInTime}</p>
                                    <Link onClick={logout} className='btn btn-error text-white mt-2 hover:scale-x-125 '>Logout</Link>
                                </div>
                            </div>
                        )}
                    </div> 
                    
                    :

                <div className=' flex gap-4'>
                    <NavLink to={'/login'} className='btn border-none hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white'>Login</NavLink>
                    <NavLink to={'/register'} className='btn border-none hover:border-none bg-[#6cddf1] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white'>register</NavLink>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;