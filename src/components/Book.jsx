import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Book = ({ book }) => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
    return (
        <Link to={`../book/${book.isbn13}`}>
            <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
                <img src={book.image} alt="" className='object-cover w-full h-56 md:h-64 xl:h-80' />
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 text-white transition-opacity duration-200 flex flex-col px-6 py-4'>
                    <p>{book.title}</p>

                    <br />
                    <p className='mt-5'>{book.subtitle.substring(0, 45)}...</p>

                    <br />
                    <p className='mt-auto'>Price:{book.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;