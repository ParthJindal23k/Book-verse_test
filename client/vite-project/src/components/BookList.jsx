import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_BOOKS } from "../graphql/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error fetching books 😢</p>;

  return (
    <div>
      <h2>📚 Book List</h2>
      {data.books.length === 0 ? (
        <p>No books yet.</p>
      ) : (
        <ul>
          {data.books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author?.name || "Unknown"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
