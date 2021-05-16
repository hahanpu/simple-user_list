import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import FormControl from "../../UI/FormControl/FormControl";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import { useState } from "react";

import styles from "./AddUser.module.css";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }

    if (isNaN(parseInt(enteredAge)) || parseInt(enteredAge) < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (changedName) => {
    setEnteredUserName(changedName);
  };

  const ageChangeHandler = (changedAge) => {
    setEnteredAge(changedAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  const errorModal = error && (
    <ErrorModal
      title={error.title}
      message={error.message}
      onConfirm={errorHandler}
    />
  );

  return (
    <div>
      {errorModal}
      <Card className={styles["user-form"]}>
        <form onSubmit={addUserHandler}>
          <FormControl
            type="text"
            label="Username"
            name="username"
            value={enteredUserName}
            onUsernameChanged={usernameChangeHandler}
          />
          <FormControl
            type="text"
            label="Age (Years)"
            name="age"
            value={enteredAge}
            onAgeChanged={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
