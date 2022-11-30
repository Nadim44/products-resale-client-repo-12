import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://assignment-12-server-nu.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            // console.log(data)
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl mb-5'>Total Orders: {bookings.length}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-6'>
                {bookings?.length &&
                    bookings?.map(booking =>
                        <div key={booking._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">{booking.name}</h2>
                                <p>Buyer Name: <span className='text-orange-600 ml-2'>{booking.buyerName}</span></p>
                                <p>Email: <span className='text-orange-600 ml-2'>{booking.email} </span></p>
                                <p>Price: <span className='text-orange-600 ml-2'>{booking.price} Taka</span></p>

                                <div className="card-actions justify-end ">
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}>
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <button className='text-green-500 font-bold text-xl'>Paid</button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;