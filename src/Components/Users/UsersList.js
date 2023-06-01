import Card from '../UI/Card';
import classes from './UsersList.module.css'

const UsersList = (props) => {
    return (
      <Card className={classes.users}>
<<<<<<< HEAD
        <ul >
          {props.users.map((user, index) => (
            <li key={index}>
=======
<<<<<<< HEAD
        <ul >
          {props.users.map((user, index) => (
            <li key={index}>
=======
        <ul>
          {props.users.map((user) => (
            <li>
>>>>>>> e70f24f2b11d80128c738baf3bdba533dc7f48bd
>>>>>>> 57a73fc7eb36e44cab52aa82a8f21568ab6836d5
              {user.name} ({user.age} year old)
            </li>
          ))}
        </ul>
      </Card>

    );
  };

export default UsersList;