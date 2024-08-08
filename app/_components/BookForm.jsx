import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BookForm = ({ book, onSubmit, setBook }) => {
  const router = useRouter();
  const [state, setState] = useState({
    title: book.title || '',
    author: book.author || '',
    publishedDate: book.publishedDate ? new Date(book.publishedDate).toISOString().split('T')[0] : '',
    description: book.description || ''
  });

  useEffect(() => {
    if (book) {
      setState({
        title: book.title || '',
        author: book.author || '',
        publishedDate: book.publishedDate ? new Date(book.publishedDate).toISOString().split('T')[0] : '',
        description: book.description || ''
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = {
      ...state,
      publishedDate: state.publishedDate ? new Date(state.publishedDate).toISOString() : ''
    };
    await onSubmit(bookData); // Pass the bookData object to onSubmit
    // console.log('Form submitted successfully');
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-black">
        <label htmlFor='title' className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          id='title'
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor='author' className="block text-sm font-medium text-gray-700 mb-1">Author</label>
        <input
          id='author'
          type="text"
          name="author"
          value={state.author}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor='publishedDate' className="block text-sm font-medium text-gray-700 mb-1">Published Date</label>
        <input
          type="date"
          id='publishedDate'
          name="publishedDate"
          value={state.publishedDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor='description' className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          id='description'
          name="description"
          value={state.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200">
        Submit
      </button>
    </form>
  );
};

export default BookForm;
