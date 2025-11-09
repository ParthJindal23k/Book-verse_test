

const typeDefs = `
  type Author {
    id: ID!
    name: String!
    age: Int
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addAuthor(name: String!, age: Int): Author
    addBook(title: String!, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
