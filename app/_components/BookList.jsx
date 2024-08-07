import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SkeletonCard } from '../../ui/skeleton-card';

const BookList = ({ books }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const booksLength = books.length;

  return (
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      ) : booksLength > 0 ? (
        books.map((book) => (
          <div
          key={book._id}
          className="p-4 border rounded shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-800">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <Link href={`/pages/books/${book._id}`}>
            <span className='text-blue-500 hover:underline mt-2 inline-block'>View Details</span></Link>
          </div>
        ))
      ) : (
        <div className="text-center col-span-full">
          <h1 className="text-2xl font-bold text-gray-700">No Books Found</h1>
        </div>
      )}
    </div>
 
  );
};

export default BookList;
