import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { name, resalePrice } = product;
    // console.log(product)
    const { user } = useContext(AuthContext)


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bayername = form.bayerName.value;

        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value

        const booking = {
            // productName: name,
            buyerName: bayername,
            email,
            price,
            phone,
            location,
            name

        }

        fetch('https://assignment-12-server-nu.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setProduct(null)
                    toast.success('Booking confirmed')

                }


            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name='bayerName' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        {/* <input name='bayername' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" /> */}
                        <input name='price' type="text" defaultValue={product?.resalePrice} placeholder="Price" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-success w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;