import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {user}=useContext(AuthContext)
    const [isLoading,setLoading]=useState(true);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
// console.log('imagekey:',imageHostKey);
   

    const handleProduct = data=>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const ProductInfo = {
                    name: data.title, 
                    email: user.email,
                    originalPrice: data.originalPrice,
                    resalePrice: data.resalePrice,
                    status:data.status,
                    image: imgData.data.url,
                    category:data.category
                }
                fetch('https://secondhand-seller-server.vercel.app/category', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(ProductInfo)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/myproduct')
                })

            }
        })
    }

    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div className='w-96 p-7 grid mx-auto md:my-12 lg:my-24 my-5  shadow-lg rounded-md'>
            <h2 className='text-primary text-center font-bold text-lg my-3'>Add A Product</h2>

            <form onSubmit={handleSubmit(handleProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">ProductName</span></label>
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
                    <label className="label"> <span className="label-text">OriginalPrice</span></label>
                    <input type="text" {...register("riginalPrice", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">ResealPrice</span></label>
                    <input type="text" {...register("ResealPrice", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Status</span></label>
                    <select
                {...register("status", { required: true })}
                className="select select-bordered w-full"
              >
                <option>excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">category</span></label>
                    <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option>Tesla</option>
                <option>Lamborghini</option>
                <option>Audi</option>
              </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary text-white w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;