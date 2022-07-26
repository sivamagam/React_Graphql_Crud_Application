import React, { useContext } from "react";
import moment from "moment";
import { Table } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../graphql/Mutation";
import { GET_TODOS } from "../graphql/Qurey";
import { TodoContext } from "../TodoContext";
import "../App.css";

const Registration = ({
   id,
    name,
    age,
    date,
    email,
    mobile,
    address,
    state,
    pincode,
 
}) => {
  const { selectedId, setSelectedId } = useContext(TodoContext);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const removeTodo = (id) => {
    deleteTodo({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  return (
    <div>
      {/* <center>
      {console.log(selectedId)}
      </center> */}
      <Table className="table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Age</th>
            <th>Date</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>State</th>
            <th>PinCode</th>
            {/* <th>Occupation</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{id}</td> */}
            <td>{name}</td>
            <td>{age}</td>
            <td>{moment(date).format("MMMM DD YYYY")}</td>
            {/* <td>{date}</td> */}
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{address}</td>
            <td>{state}</td>
            <td>{pincode}</td>
            {/* <td>{occupation}</td> */}
            <td>
              <small onClick={() => setSelectedId(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pen"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                </svg>
              </small>
              <small onClick={() => removeTodo(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </small>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Registration;
