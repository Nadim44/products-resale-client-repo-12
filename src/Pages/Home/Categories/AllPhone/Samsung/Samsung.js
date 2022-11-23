import React, { useEffect, useState } from 'react';
import SamsungPhoneCard from './SamsungPhoneCard';

const Samsung = () => {
    const [samsungPhones, setSamsungPhones] = useState([])

    useEffect(() => {
        fetch('samsung.json')
            .then(res => res.json())
            .then(data => setSamsungPhones(data))
    }, [])

    return (
        <div>
            total phone: {samsungPhones.length}
            {
                samsungPhones.map(samsungPhone => <SamsungPhoneCard
                    key={samsungPhone._id}
                    samsungPhone={samsungPhone}></SamsungPhoneCard>)
            }
            {
                // samsungPhone.map(place => <PlaceCard
                //     key={place._id}
                //     place={place}

                // ></PlaceCard>)
            }
        </div>
    );
};

export default Samsung;