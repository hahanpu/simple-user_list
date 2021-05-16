import { useState } from "react";

import UserForm from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toLocaleString() },
      ];
    });
  };

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
