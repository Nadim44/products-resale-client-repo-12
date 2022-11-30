import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from './BookingModal/BookingModal';
import SingleProduct from './SingleProduct';


const Category = () => {
    const [categoryService, SetCategoryService] = useState([]);
    const service = useLoaderData();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://assignment-12-server-nu.vercel.app/allproducts?categoryName=${service?.category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                SetCategoryService(data)
            })
    })
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 '>
                {
                    categoryService.map(singleProduct => <SingleProduct
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                        setProduct={setProduct}
                    ></SingleProduct>)
                }
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Category;