import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const HomeCategory = () => {
    const [homeCategory, setHomeCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            // fetch('homeCategory.json')
            .then(res => res.json())
            .then(data => setHomeCategory(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-orange-600'>All Phone Categories</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 '>
                {
                    homeCategory.map(hcategory => <SingleCategory
                        key={hcategory._id}
                        hcategory={hcategory}
                    ></SingleCategory>)
                }


            </div>
        </div>
    );
};

export default HomeCategory;