const { Book, User } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({}).populate('users').populate({
        path: 'users',
        populate: 'books',
      });
    },
    classes: async () => {
      return await Book.find({}).populate('users');
    },
    class: async (parent, args) => {
      return await Book.findById(args.id).populate('bookcount');
    },
    professors: async () => {
      return await User.find({}).populate('bookid');
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    addbook: async (parent, { User, email, bookCount }) => {
      // Create and return the new book object
      return await Book.create({ login, addUser, saveBook, removeBook });
    },
  },
};

module.exports = resolvers;