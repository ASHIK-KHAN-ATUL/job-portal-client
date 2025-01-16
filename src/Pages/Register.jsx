import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const {createUser, setUser, signinWithGoogle, user} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const newUser = {name, photo, email, password};
        console.log(newUser);

        createUser(email, password)
        .then(result => {
            setUser(result.user)
            toast.success("Register Successfully Done")
        })
        .catch( error => {
            toast.error('Unable To Register')
            console.log('Error msg', error);
        })
    }

    const handleGoogleSignIn = () => {
        signinWithGoogle()
        .then(res => {
            setUser(res.user)
            toast.success("Register Successfully Done")
        })
        .catch(error => {
            toast.error('Unable To Register')
            console.log('Error msg', error);
        })
    }

    if(user){
        return <Navigate to={'/'} ></Navigate>
    }

    return (
        <div className="my-10 ">

        <div className="min-h-screen flex justify-center items-center">
            <div className="card  w-full max-w-lg shrink-0 rounded-none p-10 shadow-lg bg-[#ade8f4] bg-opacity-30 border-2 border-[#d8f3dc] shadow-[#d8f3dc] ">
                <h2 className="text-2xl font-bold text-center pt-7">Register your account</h2>
                <form onSubmit={handleSubmit}  className="card-body">

                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered"  />
                    </div>

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
                            <a href="#" className="label-text-alt link link-hover">Forget password?</a>
                        </label>
                    </div>
                    
                    <div className="form-control mt-6">
                    <button className="btn border-none hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white">Register</button>
                    </div>
                </form>
                <p className="text-center">Already Have An Account ? <Link className="text-[#f85e00] font-semibold" to="/login" > Login</Link> </p>

                <div className="divider divider-success"></div>

                <Link onClick={handleGoogleSignIn} className=" py-4 px-2 rounded-xl flex justify-around items-center bg-[#c8e7ff] w-[250px] mx-auto hover:text-white duration-300 ease-linear hover:scale-x-90 ">
                        
                    <p className="font-semibold">Register With Google  </p>
                    <FcGoogle className="text-3xl"></FcGoogle>
                </Link>


            </div>
        </div>
    </div>
    );
};

export default Register;