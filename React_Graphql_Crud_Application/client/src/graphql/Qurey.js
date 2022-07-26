import { gql } from "@apollo/client";

export const GET_TODOS = gql`
 
 {
  getTodos{
    id
    name
    age
    date
    email
    mobile
    address
    state
    pincode
    occupation
  }
}

`;

export const GET_TODO = gql`
  query getTodo($id: ID) {
    getTodo(id: $id) {
     id
    name
    age
    date
    email
    mobile
    address
    state
    pincode
    occupation
    }
  }
`;

