import React, { useContext, useEffect, useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import ReactStars from "react-rating-stars-component";

const CategoryBooks = () => {

    const{name} = useParams();
    const[books , setBooks] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/books?category=${name}`)
        .then(res=> res.json())
        .then(data => setBooks(data) )
   } ,[name])

//    console.log(name)
//    console.log(books)

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-5 md:py-20 justify-items-center   '>
            {
                books.map((book, idx) => 

                <div key={idx} className=" bg-[#bbdefb] bg-opacity-80 border-2 border-[#64b5f6] w-[90%] sm:w-[530px]  rounded-xl scale-75 ">
                    <div className="flex-col">
                        <img src={book.image} className="w-[300px] rounded-lg shadow-2xl mx-auto pt-5 " />
                        <div className='px-4 flex flex-col gap-3 text-xl font-semibold '>
                            <h1 className="sm:text-2xl text-base font-bold pt-5">Book Name: {book.name}</h1>
                            <p className="text-sm sm:text-2xl">Author Name : {book.author}</p>
                            <p className="text-sm sm:text-2xl">Category : {book.category}</p>                  
                            <p className="text-sm sm:text-2xl">Quantity : {book.quantity}</p>                  
                            <p className="flex  items-center text-sm sm:text-2xl">Rating :  <ReactStars count={5} value={book.rating} size={30}></ReactStars> </p>                  
                        </div>
                        <div className='p-5 flex justify-center'>
                                <Link to={`/details/${book._id}`} className="btn border-none bg-[#90caf9] hover:bg-sky-400 hover:border-none scale-110 duration-300 hover:scale-125 text-base hover:text-white shadow-md">Details</Link>
                        </div>
                    </div>
                </div>

                )
            }
        </div>
    );
};

export default CategoryBooks;