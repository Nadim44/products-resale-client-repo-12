import React from 'react';

const NewSection = () => {
    return (
        <div>
            <div className="hero my-20 bg-gray-200 pb-16 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2 mb-4'>
                        <img src="https://fdn.gsmarena.com/imgroot/news/19/12/phones-of-the-decade/-727w2/gsmarena_001.jpg" alt='' className="w-4/5 h-full rounded-lg shadow-2xl border-8" />

                    </div>
                    <div className='w-1/2 sm:mt-4 '>
                        <p className='text-3xl text-oran text-orange-600 font-bold '>About Resale</p>
                        <p className="mb-4 pt-6">Resale Products which means non-proprietary Goods that Seller purchases from original manufacturers and then resells to customers under the original manufacturer's trade, brand and/or product names.</p>
                        <p className="pb-6"> They are buying used cars for resale to overseas markets. The new model has solid resale value. The number of home resales has risen steeply.</p>
                        {/* <button className="btn btn-primary">Know more</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;


