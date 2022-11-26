import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const[categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <div className='my-5 md:my-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category=> <CategoryCard
                    key={category._id}
                    category={category}
                    >

                    </CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;