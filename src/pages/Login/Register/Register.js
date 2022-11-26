import React, { useContext, useEffect, useRef, useState } from 'react';
import login from '../../../asset/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import Lottie from 'lottie-web';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../../hooks/useToken';
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
      const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser,providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = (data) => {
        
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email, value) =>{
    //    console.log(saveUser);
        const user ={name, email,value};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setCreatedUserEmail(email);
        })
    }

      //google
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
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div className='form-control grid self-center'>
                    <label >before submit select who you are!</label>
                    <select {...register("select", { required: "required*" })} className="select select-bordered select-sm mt-2">
                            <option value="seller">Seller</option>
                            <option value="User">User</option>
            
                     </select>
                    </div>
                    <input className='btn btn-primary text-white font-bold w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                    


                </form>
                <p>Already have an account ?<Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full hover:bg-primary hover:border-none gap-2' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle>CONTINUE WITH GOOGLE</button>

            </div>
            </div>
            
        </div>
    );
};

export default Register;