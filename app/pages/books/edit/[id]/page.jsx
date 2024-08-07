'use client';
import axios from 'axios';
import BookForm from '../../../../_components/BookForm';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const EditBookPage = () => {
  const params = useParams();
  const [book, setBook] = useState({ title: '', author: '', publishedDate: '', description: '' });
  const [updatedBook, setUpdatedBook] = useState({ title: '', author: '', publishedDate: '', description: '' });

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${params.id}`);
      setBook(res.data);
      setUpdatedBook(res.data);
    };
    fetchBook();
  }, [params.id]);

  const updateBook = async (bookData) => {
    try {
      if (bookData.publishedDate) {
        bookData.publishedDate = new Date(bookData.publishedDate).toISOString();
      }
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/${params.id}`, bookData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Book updated successfully');
    } catch (error) {
      console.error('Failed to update book:', error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
        <h1 className="text-3xl font-bold mb-4 text-center">Edit Book</h1>
        <BookForm book={updatedBook} onSubmit={updateBook} setBook={setUpdatedBook} />
      </div>
    </div>
  );
};

export default EditBookPage;
