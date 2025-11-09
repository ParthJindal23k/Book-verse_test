import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 GraphQL Book Manager</h1>
      <AddBook />
      <BookList />
    </div>
  );
};

export default App;
