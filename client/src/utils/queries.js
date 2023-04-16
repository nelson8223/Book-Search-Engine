import { gql } from '@apollo/client';

export const GET_ME = gql`
  query {
    me {
      id
      username
      email
    }
  }
`;

export const USER_TYPE = gql`
  type User {
    id: ID
    username: String
    email: String
  }
`;