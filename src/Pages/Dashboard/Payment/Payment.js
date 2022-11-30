import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js'


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { name } = booking

    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;