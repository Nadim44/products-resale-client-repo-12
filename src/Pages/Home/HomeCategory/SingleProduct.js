import React from 'react';

const SingleProduct = ({ singleProduct, setProduct }) => {
    const { name, img, originalPrice, resalePrice, time, location, usedYear, seller } = singleProduct;
    // console.log(singleproduct)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} className='h-72' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <p>Seller Name: <span className='text-orange-600 ml-2'>{seller}</span> </p>
                    <p>Original Price: <span className='text-orange-600 ml-2'>{originalPrice} </span> Taka</p>
                    <p>Resale Price: <span className='text-orange-600 ml-2'>{resalePrice}</span> Take</p>
                    <p>Use of Year: <span className='text-orange-600 ml-2'>{usedYear}</span></p>
                    <p>Location <span className='text-orange-600 ml-2'>{location}</span></p>
                    <p>Posted Date: <span className='text-orange-600 ml-2'>{time}</span></p>
                    <div className="card-actions justify-end">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary"
                            onClick={() => setProduct(singleProduct)}
                        >Book now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;