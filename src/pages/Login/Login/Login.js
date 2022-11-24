import React, { useEffect, useRef } from 'react';
import login from '../../../asset/login.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Lottie from 'lottie-web';
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
    const { register, handleSubmit } = useForm();
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
               
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                       
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
                       
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            </div>
           
        </div>
    );
};

export default Login;