// import React, { useEffect, useState } from 'react';
// import Category from './Category';

// const AllCategories = () => {
//     const [categories, setCategories] = useState([])
//     useEffect(() => {
//         fetch('homeCategory.json')
//             .then(res => res.json())
//             .then(data => setCategories(data))
//     }, [])
//     return (
//         <div>
//             <h1 className='text-center text-3xl font-bold text-orange-600'>product categories section</h1>
//             <div>
//                 {
//                     categories.map(category => <Category
//                         key={category._id}
//                         category={category}
//                     ></Category>)
//                 }

//             </div>
//         </div>
//     );
// };

// export default AllCategories;



// category file
// import React from 'react';

// const Category = ({ category }) => {
//     const { categoryName } = category

//     return (
//         <div className='text-center'>
//             {categoryName}
//         </div>
//     );
// };

// export default Category;