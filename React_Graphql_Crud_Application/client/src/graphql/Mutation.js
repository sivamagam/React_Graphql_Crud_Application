import { gql } from "@apollo/client";


export const ADD_TODO = gql`
  mutation (
    $name: String
    $email: String
    $age: Number
    $mobile: Number
    $address: String
    $state: String
    $pincode: Number
    $occupation: String
    $date: Date
  ) {
    addTodo(
      name: $name
      email: $email
      age: $age
      mobile: $mobile
      address: $address
      state: $state
      pincode: $pincode
      occupation: $occupation
      date: $date
    ) {
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

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

export const UPDATE_TODO = gql`

  mutation updateTodo(
    $id: ID
    $name: String
    $email: String
    $age: Number
    $mobile: Number
    $address: String
    $state: String
    $pincode: Number
    $occupation: String
    $date: Date
  ) {
    updateTodo(
      id: $id
      name: $name
      email: $email
      age: $age
      mobile: $mobile
      address: $address
      state: $state
      pincode: $pincode
      occupation: $occupation
      date: $date
    )
    
  }
`;
