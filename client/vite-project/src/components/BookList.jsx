import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_BOOKS } from "../graphql/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
        <p className="text-gray-600">Loading books...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-red-600">Error fetching books: {error.message} 😢</p>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📚 Library Collection</h2>
      
      {data.books.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No books in your library yet.</p>
          <p className="text-gray-400 dark:text-gray-500 mt-2">Add your first book using the form above!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.books.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                by {book.author?.name || "Unknown"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
