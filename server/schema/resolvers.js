const Book = require("../models/Book");
const Author = require("../models/Author");

const resolvers = {
  Query: {
    books: async () => await Book.find(),
    authors: async () => await Author.find(),
  },

  Book: {
    author: async (parent) => {
      return await Author.findById(parent.authorId);
    },
  },

  Author: {
    books: async (parent) => {
      return await Book.find({ authorId: parent.id });
    },
  },

  Mutation: {
    addAuthor: async (_, { name, age }) => {
      const author = new Author({ name, age });
      return await author.save();
    },
    addBook: async (_, { title, authorId }) => {
      const book = new Book({ title, authorId });
      return await book.save();
    },
  },
};

module.exports = resolvers;
