import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)

    const closeModal = () => {
        setDeletingProduct(null)
    }

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['addproduct'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/addproduct', {
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
    })

    const handleDeleteProduct = product => {
        console.log(product)
        fetch(`http://localhost:5000/addproduct/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Product deleted successfully')
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            Total Products: {products?.length}

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-6'>
                {
                    products?.map(product =>
                        <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-36' src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">{product.name}</h2>
                                <p>Product Category: <span className='text-orange-600 ml-2'>{product.Categories}</span></p>
                                <p>Price: <span className='text-orange-600 ml-2'>{product.price} Taka</span></p>
                                <p>Number: <span className='text-orange-600 ml-2'>{product.number}</span></p>
                                <p>Location: <span className='text-orange-600 ml-2'>{product.location}</span></p>
                                <div className="card-actions justify-end ">
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    modalData={deletingProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;