'use client';
import axios from 'axios';
import { useParams, useRouter } from "next/navigation";
import BookDetails from '../../../_components/BookDetails';
import { useEffect, useState } from 'react';

const BookPage = () => {
  const [book, setBook] = useState();
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchBook = async (id) => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook(id);
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
      router.push('/');
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className='p-4'>
      <h1 className="text-3xl font-bold mb-4">Book Details</h1>
      <BookDetails book={book} onDelete={handleDelete} />
    </div>
  );
};

export default BookPage;
