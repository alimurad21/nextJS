'use client';
import axios from 'axios';
import BookForm from '../../../_components/BookForm';
import { useState } from 'react';

const NewBookPage = () => {
  const [book, setBook] = useState({ title: '', author: '', publishedDate: '', description: '' });

  const createBook = async (bookData) => {
    try {
      if (bookData.publishedDate) {
        bookData.publishedDate = new Date(bookData.publishedDate).toISOString();
      }
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, bookData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Book created successfully');
    } catch (error) {
      console.error('Failed to create book:', error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
        <h1 className="text-3xl font-bold mb-4 text-center">New Book</h1>
        <BookForm book={book} setBook={setBook} onSubmit={createBook} />
      </div>
    </div>
  );
};

export default NewBookPage;
