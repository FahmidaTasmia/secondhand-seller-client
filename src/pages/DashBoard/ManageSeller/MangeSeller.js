import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MangeSeller = () => {
    const[deletingSeller, setDeletingSeller]=useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }

    const { data: newSellers, isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/newseller', {
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


    const handleDeleteSeller = newSeller => {
        fetch(`http://localhost:5000/newseller/${newSeller._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller ${newSeller.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl md:my-8 text-center font-bold text-primary">Manage Sellers: {newSellers?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newSellers?.map((newSeller, i) => <tr key={newSeller._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={newSeller.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{newSeller.name}</td>
                                <td>{newSeller.email}</td>
                              
                                <td>
                                    <label onClick={() => setDeletingSeller(newSeller)} htmlFor="confirmation-modal" className="btn btn-sm btn-primary text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction = {handleDeleteSeller}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MangeSeller;