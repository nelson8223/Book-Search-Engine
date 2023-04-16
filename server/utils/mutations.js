const { gql } = require('apollo-server-express');

const mutations = gql`
  type Mutation {
    loginUser(username: String!, password: String!): User!
    addUser(username: String!, email: String!, password: String!): User!
    saveBook(book: BookInput!): User!
    removeBook(bookId: ID!): User!
  }

  input BookInput {
    title: String!
    author: String!
    genre: String!
  }
`;

module.exports = mutations;
