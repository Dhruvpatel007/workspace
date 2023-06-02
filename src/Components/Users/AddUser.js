import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error,setError]=useState();

  const userInputRef=useRef();
  const ageInputRef=useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername=userInputRef.current.value;
    const enteredAge=ageInputRef.current.value;
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
    {
      // console.log("invalid username");
      setError({
        title: "Invalid Input",
        message: "Please enter valid name & age"});
      return;
      
    }else if(+enteredAge < 1){
      setError({
        title: "Invalid Age",
        message: "Please enter age > 1"});
      return;
    }
    props.onAddUser(enteredUsername ,enteredAge);
    userInputRef.current.value='';
    ageInputRef.current.value='';
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userInputRef}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;