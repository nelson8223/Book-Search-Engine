import { gql } from '@apollo/client';

export const me = gql`
  query {
    me {
      id
      username
      email
    }
  }
`;

export const Me = gql`
  type User {
    id: ID
    username: String
    email: String
  }
`;