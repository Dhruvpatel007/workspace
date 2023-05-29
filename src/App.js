import "./styles.css";
import AddUser from './Components/Users/AddUser';
import UsersList from "./Components/Users/UsersList";
import { useState } from "react";

export default function App() {

  const [usersList, setUsersList]=useState([]);
 
  const addUserHandler=(uName, uAge)=>{
   setUsersList((prevUsersList)=>{
    return [...prevUsersList, { name: uName, age: uAge}]
    
   });
   
  };
  return (
    <div>
     <AddUser onAddUser={addUserHandler}/>
     <UsersList users={usersList}/>
    </div>
  );
}
