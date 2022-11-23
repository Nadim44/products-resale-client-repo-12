import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import SamsungPhoneCard from './SamsungPhoneCard';

const Samsung = () => {
    const [samsungPhones, setSamsungPhones] = useState([])
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('samsung.json')
            .then(res => res.json())
            .then(data => setSamsungPhones(data))
    }, [])

    return (
        <div>
            total phone: {samsungPhones.length}
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    samsungPhones.map(samsungPhone => <SamsungPhoneCard
                        key={samsungPhone._id}
                        samsungPhone={samsungPhone}
                        setProduct={setProduct}
                    ></SamsungPhoneCard>)
                }
            </div>

            {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>}
        </div>
    );
};

export default Samsung;