'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BookList from './_components/BookList';

const Home = () => {
  const [books, setBooks] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
      setBooks(res.data);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };

  return (
    <div className='p-4'>
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
