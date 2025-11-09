import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_AUTHORS, GET_BOOKS } from "../graphql/queries";
import { ADD_BOOK } from "../graphql/mutations";

const AddBook = () => {
  const { data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !authorId) return alert("Please fill all fields!");

    addBook({ variables: { title, authorId } });
    setTitle("");
    setAuthorId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
        <option value="">Select author</option>
        {data?.authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
