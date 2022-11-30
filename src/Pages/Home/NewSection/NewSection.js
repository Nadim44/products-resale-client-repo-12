import React from 'react';

const NewSection = () => {
    return (
        <div>
            <div className="hero my-20 bg-gray-300 pb-16 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2 mb-4'>
                        <img src="https://media.istockphoto.com/id/1282610198/photo/airplane-flying-on-tropical-summer-vacation.jpg?b=1&s=170667a&w=0&k=20&c=6zA6DOTOhgszSdaI7OmEWAeYjHl7SSNi59Fh63jGBx4=" alt='' className="w-4/5 h-full rounded-lg shadow-2xl border-8" />
                        <img src="https://content.thriveglobal.com/wp-content/uploads/2020/10/Travel.jpg" alt='' className="absolute right-5 top-1/2 border-8 w-3/5 rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 sm:mt-4 '>
                        <p className='text-3xl text-oran text-orange-600 font-bold '>About Travel</p>
                        <p className="mb-4 pt-6">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans.Some travel to learn more while some travel to take a break from their life.</p>
                        <p className="pb-6">  No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</p>
                        {/* <button className="btn btn-primary">Know more</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;


