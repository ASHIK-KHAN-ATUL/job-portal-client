import React from 'react';
import Banner from '../Components/Banner';
import BookCategories from '../Components/BookCategories';


const Home = () => {
    return (
        <div>
            <div className='w-[70%] mx-auto lg:w-[55%] 2xl:w-[50%] '>
                <Banner></Banner>
            </div>
            <BookCategories></BookCategories>
        </div>
    );
};

export default Home;