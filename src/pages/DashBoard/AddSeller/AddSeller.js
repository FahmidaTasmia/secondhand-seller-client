import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../components/Loading/Loading';

const AddSeller = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const { data: newSellers, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleASeller = data=>{

    }

    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div className='w-96 p-7 grid mx-auto md:my-12 lg:my-24 my-5  shadow-lg rounded-md'>
            <h2>hello</h2>

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
                            newSellers?.map(seller => <option
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

export default AddSeller;