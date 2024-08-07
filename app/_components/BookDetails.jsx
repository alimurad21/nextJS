import Link from 'next/link';

const BookDetails = ({ book, onDelete }) => {  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      onDelete(id);
    }
  };

  return (
    <>
      {book ? (
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Published Date:</span> {new Date(book.publishedDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">{book.description}</p>
          <div className="flex space-x-4">
            <Link href={`/pages/books/edit/${book._id}`}>
              <button className="px-4 py-2 text-white bg-blue-500 rounded">Edit</button>
            </Link>
            <button 
              onClick={() => handleDelete(book._id)} 
              className="px-4 py-2 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-gray-800">No Book Detail</h1>
      )}
    </>
  );
};

export default BookDetails;