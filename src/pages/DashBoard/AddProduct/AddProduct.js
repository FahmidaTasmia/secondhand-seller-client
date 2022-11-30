import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
// console.log('imagekey:',imageHostKey);
    const { data: category, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    const handleASeller = data=>{
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
                const addProduct = {
                    productName: data.name,
                    originalPrice: data.originalprice,
                    sellingPrice: data.resaleprice,
                    location: data.location,
                    email: user.email,
                    usesTime: data.purchase,
        
                    categoriesId: data.category,
                    shortDescription: data.message,
                    sellerName: user.displayName,
                    images1: imgData.data.url,
                    time: new Date(),
                  };
                fetch('http://localhost:5000/allProduct', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(addProduct)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/managesellers')
                })

            }
        })
    }

    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div className='w-96 p-7 grid mx-auto md:my-12 lg:my-24 my-5  shadow-lg rounded-md'>
            <h2 className='text-primary text-center font-bold text-lg my-3'>Add A New Seller</h2>

            <form onSubmit={handleSubmit(handleASeller)}>
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
                    <label className="label"> <span className="label-text">Status</span></label>
                    <select 
                    {...register('status')}
                    className="select input-bordered w-full max-w-xs">
                        {
                           category?.map(seller => <option
                                key={seller._id}
                                value={seller.value}
                            >{seller.value}</option>)
                        }
                        
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary text-white w-full mt-4' value="Add A Seller" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;