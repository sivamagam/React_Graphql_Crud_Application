//import moment from "moment";
import React, { useEffect, useState, useRef, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TODO, UPDATE_TODO } from "../graphql/Mutation";
import { GET_TODOS, GET_TODO } from "../graphql/Qurey";
import { TodoContext } from "../TodoContext";

const AddTodos = () => {
  const { selectedId, setSelectedId } = useContext(TodoContext);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [todo, setTodo] = useState({
    name: "",
    age: "",
    date: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    pincode: "",
    occupation: ""
  });
 

  const { loading, error, data } = useQuery(GET_TODO, {
    variables: { id: selectedId },
    onComplete: (data) => setTodo(data?.getTodo),
    fetchPolicy: "network-only",
    errorPolicy: "none",
  });
  console.log(data?.getTodo);
  console.log("getTodo", data);
  console.log(error,"Error");
  console.log(loading);
  // console.log(selectedId)

  const inputAreaRef = useRef();

  useEffect(() => {
    const checkIfclickOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        console.log("Out side input area");
        setSelectedId(0);
      } else {
        console.log("In side input area");
      }
    };
    document.addEventListener("mousedown", checkIfclickOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfclickOutside);
    };
  }, []);

  const [addTodo] = useMutation(ADD_TODO);
  const onSubmit = (e) => {
    if (selectedId === 0) {
      addTodo({
        variables: {
          name: todo.name,
           age: todo.age,
          // age: parseInt(todo.age),
          // date: "06-05-2022",
          date: todo.date,
          email: todo.email,
          mobile: todo.mobile,
          address: todo.address,
          state: todo.state,
          pincode: todo.pincode,
          occupation: todo.occupation
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
    } else {
      updateTodo({
        variables: {
          id: selectedId,
          name: todo.name,
          // age: parseInt(todo.age),
          age: todo.age,
          // date:"06-05-2022",
          date: todo.date,
          email: todo.email,
          mobile: todo.mobile,
          address: todo.address,
          state: todo.state,
          pincode: todo.pincode,
          occupation: todo.occupation
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
    }
  };
  return (
    <form onSubmit={onSubmit} ref={inputAreaRef}>
      {/* <span  className="text-danger">{submitError}</span> */}
      <center>
        
        <label>
          <b className="heading">User ID - {selectedId}</b>
        </label>
      </center>
      <div className="row">
      <div className="form-group col">
        <label>Name</label>
        {/* <pre>{JSON.stringify(todo, null, '\t')}</pre> */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        {/* <span  className="text-danger">{nameError}</span> */}
      </div>
      <div className="form-group col">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Your Age"
          value={todo.age}
          onChange={(e) => setTodo({ ...todo, age: e.target.value })}
        />
      </div>
     
      <div className="form-group col">
        <label>Date</label>
        <input
          type="date"
          className="form-control"
          value={todo.date}
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
        />
      </div>
       </div>
      {/* <div className="form-group">
        <label>Gender</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Gender"
          value={todo.gender}
          onChange={(e) => setTodo({ ...todo, gender: e.target.value })}
        />
      </div> */}
      <div className="row">
      <div className="form-group col">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
          value={todo.email}
          onChange={(e) => setTodo({ ...todo, email: e.target.value })}
        />
      </div>
      <div className="form-group col">
        <label>Mobile</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Your Mobile"
          value={todo.mobile}
          onChange={(e) => setTodo({ ...todo, mobile: e.target.value })}
        />
      </div>
      <div className="form-group col">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Address"
          value={todo.address}
          onChange={(e) => setTodo({ ...todo, address: e.target.value })}
        />
      </div>
       </div>
       <div className="row">
      <div className="form-group col">
        <label>State</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your State"
          value={todo.state}
          onChange={(e) => setTodo({ ...todo, state: e.target.value })}
        />
      </div>
      <div className="form-group col">
        <label>Pincode</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Your Pincode"
          value={todo.pincode}
          onChange={(e) => setTodo({ ...todo, pincode: e.target.value })}
        />
      </div>
      <div className="form-group col">
        <label>Occupation</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Occupation"
          value={todo.occupation}
          onChange={(e) => setTodo({ ...todo, occupation: e.target.value })}
        />
      </div>
       </div>
      {/* <div className="form-group">
        <label>Status</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Status"
          value={todo.status}
          onChange={(e) => setTodo({ ...todo, status: e.target.value })}
        />
      </div> */}
      <br />
      <button type="submit" className="btn btn-primary" >
        {selectedId === 0 ? "Add" : "Update"}
      </button>
    </form>
  );
};
export default AddTodos;


