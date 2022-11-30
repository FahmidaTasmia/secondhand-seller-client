import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProduct = () => {
    const[deletingProduct, setDeletingProduct]=useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: newProducts, isLoading, refetch } = useQuery({
        queryKey: ['Product'],
        queryFn: async () => {
            try {
                const res = await fetch('https://secondhand-seller-server.vercel.app/addproduct', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });


    const handleDeleteProduct = category => {
        fetch(`https://secondhand-seller-server.vercel.app/category/${category._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product ${category.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl md:my-8 text-center font-bold text-primary">Manage Products: {newProducts?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>original Price</th>
                            <th>Reseal Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newProducts?.map((newProduct, i) => <tr key={newProduct._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={newProduct.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{newProduct.name}</td>
                                <td>{newProduct.email}</td>
                              
                                <td>
                                    <label onClick={() => setDeletingProduct(newProduct)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction = {handleDeleteProduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;