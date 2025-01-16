import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const {signInUser, user, setUser, signinWithGoogle} = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        const theUser = {email, password}

        signInUser(email, password)
        .then(res => {
            setUser(res.user)
            toast.success('Login Successfully Done')
        })
        .catch(error => {
            toast.error("Unable to login")
            console.log(error)
        })
    }

    const handleGoogleSignIn = () => {
        signinWithGoogle()
        .then(res => {
            setUser(res.user)
            toast.success('Login Successfully Done')
        })
        .catch(error => {
            toast.error('Unable to Login')
            console.log(error)
        })
    }

    if(user){
        return <Navigate to={'/'} ></Navigate>
    }

    return (
        <div className="my-10  ">
            <div className="min-h-screen flex justify-center items-center ">
                    <div className="card w-full max-w-lg shrink-0 rounded-none p-10 shadow-lg bg-[#ade8f4] bg-opacity-30 border-2 border-[#d8f3dc] shadow-[#d8f3dc]">
                        <h2 className="text-2xl font-bold text-center pt-7">Login your account</h2>
                        <form onSubmit={handleSubmit}  className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                            <button className="btn border-none hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Dont Have An Account ? <Link className="text-red-500 font-semibold" to="/register" > Resgister</Link> </p>

                        <div className="divider divider-success"></div>

                        <Link onClick={handleGoogleSignIn} className=" py-4 px-2 rounded-xl flex justify-around items-center bg-[#c8e7ff] w-[250px] mx-auto hover:text-white duration-300 ease-linear hover:scale-x-90 ">
                                
                            <p  className="font-semibold">Login With Google  </p>
                            <FcGoogle className="text-3xl"></FcGoogle>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default Login;