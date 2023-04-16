const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
  me: User
}
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [savedBooks]
  }

  type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image: String
    link: link
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    classes: [Class]
  }

  type Auth {
    token: [token]
    user: [user]
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addSchool(name: String!, location: String!, studentCount: Int!): School
  }
`;

module.exports = typeDefs;
