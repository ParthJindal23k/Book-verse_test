import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $authorId: ID!) {
    addBook(title: $title, authorId: $authorId) {
      id
      title
      author {
        id
        name
      }
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!, $age: Int) {
    addAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;
