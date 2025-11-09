import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_AUTHORS, GET_BOOKS } from "../graphql/queries";
import { ADD_BOOK } from "../graphql/mutations";

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook, { loading: addingBook }] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !authorId) {
      return alert("Please fill all fields!");
    }

    try {
      await addBook({ variables: { title, authorId } });
      setTitle("");
      setAuthorId("");
    } catch (error) {
      alert(`Error adding book: ${error.message}`);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center py-4">
      <span className="text-gray-500 dark:text-gray-400">Loading authors...</span>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4">
      <span className="text-red-700 dark:text-red-300">Error loading authors: {error.message}</span>
    </div>
  );

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">📖 Add New Book</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Book Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Author
            </label>
            <select
              id="author"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
            >
              <option value="">Select an author</option>
              {data?.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={addingBook}
            className="w-full py-2 px-4 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {addingBook ? "Adding..." : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
