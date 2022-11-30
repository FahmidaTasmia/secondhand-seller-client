import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

import useAdmin from '../hooks/useAdmin';
import Header from '../pages/Shared/Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-primary font-bold bg-neutral">
                        <li className='hover:bg-primary hover:text-white hover:rounded-lg' ><Link to="/dashboard">My Orders</Link></li>
                        {
                          isAdmin &&  
                          <>
                                <li className='hover:bg-primary hover:text-white hover:rounded-lg' ><Link to="/dashboard/allusers">All Users</Link></li>
                                <li className='hover:bg-primary hover:text-white hover:rounded-lg' ><Link to="/dashboard/addseller">Add A Seller</Link></li>
                                <li className='hover:bg-primary hover:text-white hover:rounded-lg' ><Link to="/dashboard/managesellers">Manage Seller</Link></li>
                                <li className='hover:bg-primary hover:text-white hover:rounded-lg' ><Link to="/dashboard/addproduct">Add Product</Link></li>
                          </>
                        }
                        
                                
                          

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;