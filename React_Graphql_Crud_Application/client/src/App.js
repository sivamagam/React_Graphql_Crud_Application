import "./App.css";
import { GET_TODOS } from "./graphql/Qurey";
import { useQuery } from "@apollo/client";
import Registration from "./components/Todo";
import AddTodos from "./components/AddTodos";
import { TodoContext } from "./TodoContext";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(0);

  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(data);

  return (
    <TodoContext.Provider value={{ selectedId, setSelectedId }}>
      <div className="container todobox">
        <AddTodos />

        <div className="list-group mt-4">
      

          {data?.getTodos.map((todo) => (

            <Registration
              key={todo.id}
              id={todo.id}
              name={todo.name}
              age={todo.age}
              date={todo.date}
              email={todo.email}
              mobile={todo.mobile}
              address={todo.address}
              state={todo.state}
              pincode={todo.pincode}
              occupation={todo.occupation}
        
            />
             
          ))}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
