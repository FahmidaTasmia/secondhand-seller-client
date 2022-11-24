import React, { useEffect, useRef } from 'react';
import login from '../../../asset/login.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Lottie from 'lottie-web';
const Register = () => {
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
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                    
                    </div>
                    <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                 
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
            </div>
            
        </div>
    );
};

export default Register;