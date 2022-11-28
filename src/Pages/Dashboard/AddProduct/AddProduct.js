import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate();

    const { data: AllCategories, isLoading } = useQuery({
        queryKey: ['Categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriesSelect');
            const data = await res.json();
            return data;
        }
    })
    const handleAddProduct = data => {
        console.log(data)
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
                if (imgData.success) {
                    // console.log(imgData.data.url)
                    const product = {
                        name: data.name,
                        price: data.price,
                        number: data.number,
                        location: data.location,
                        Categories: data.Categories,
                        image: imgData.data.url
                    }

                    // save product information to the database
                    fetch('http://localhost:5000/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/manageproducts')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='w-96'>
                <h2 className="text-3xl">Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Price</span> </label>
                        <input type="text"
                            {...register("price", {
                                required: "Price is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Number</span> </label>
                        <input type="text"
                            {...register("number")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Location</span> </label>
                        <input type="text"
                            {...register("location")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Categories</span> </label>
                        <select
                            {...register('Categories')}
                            className="select input-bordered w-full max-w-xs">
                            {
                                AllCategories.map(singleCategory => <option
                                    key={singleCategory._id}
                                    value={singleCategory.category}
                                >{singleCategory.category}</option>)
                            }

                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Image</span> </label>
                        <input type="file"
                            {...register("image")}
                            className="input input-bordered w-full max-w-xs" />

                    </div>
                    <input className='btn btn-accent w-full mt-4  max-w-xs' value='Add A Product' type="submit" />

                </form>
            </div>


        </div>
    );
};

export default AddProduct;