import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-96 mb-4 mt-4">
            <div id="slide1" className="carousel-item relative w-full  ">
                <img alt='' src="https://images.anandtech.com/doci/9770/X-T30_DSF5320_678x452.jpg" className="w-full  rounded-xl " />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/4">
                    <h1 className='text-2xl text-orange-600 font-bold '> Best Phone Resale</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                    <p className='text-white font-semibold text-xl'>The smartphone life isn't cheap. It's a good idea to think about selling phones as part of your upgrading habits.</p>
                </div>
            </div>

        </div >
    );
};

export default Banner;