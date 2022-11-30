import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ hcategory }) => {
    const { category, _id, img } = hcategory;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{category}</h2>
                <p>All second hand phone here</p>
                <div className="card-actions justify-end ">
                    <Link to={`/category/${_id}`}>
                        <button className="btn btn-primary">All Phone</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SingleCategory;