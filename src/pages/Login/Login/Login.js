import React, { useContext, useEffect, useRef, useState } from 'react';
import login from '../../../asset/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Lottie from 'lottie-web';

import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider.js';




const Login = () => {

    //animation
    const container =useRef(null);
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./login.json')
        })
        return () => instance.destroy();
     
    },[])
    //form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const{signIn}=useContext(AuthContext);
    const {providerLogin}=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setLoginError('');
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message);
            })
           
    }

    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
          const user = result.user;
          console.log(user);
      })
      .catch(error=>console.error(error));

  }
    return (
        <div className='hero w-full my-20'>
            <div className='hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row'>

            <div className="text-center lg:text-left"
            ref={container}
            >
            </div>
            <div className='w-96 p-7'>
                <div className='grid justify-items-center'>
                <img className='w-20 h-20 ' src={login} alt="" />
                </div>
               
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/register">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
            </div>
            </div>
           
        </div>
    );
};

export default Login;