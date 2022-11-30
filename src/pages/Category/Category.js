import { useQuery } from '@tanstack/react-query';
import CategoryCard from '../CategoryCard/CategoryCard';


const Category = () => {
    // const[categories,setCategories]=useState([]);

const{data:categories=[]}=useQuery({
    queryKey:['categories'],
    queryFn:()=>fetch('https://secondhand-seller-server.vercel.app/category')
    .then(res=>res.json())
})

    
    return (
        <div className='md:my-12 my-5 p-5 md:p-12'>
            <h3 className='text-center text-4xl text-primary font-sans font-bold my-3'>Discover Your Brand</h3>
            <p className='text-center text-2xl md:mb-5'>Discover the many perks that come with <span>Cmart</span> certified pre-owned vehicles. <br /> Shop nearby inventory and offers, and drive off with the <span>Cmart</span> you’ve always wanted.</p>
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