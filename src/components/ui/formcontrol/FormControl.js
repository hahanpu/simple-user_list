import styles from "./FormControl.module.css";

const FormControl = (props) => {
  const inputChangeHandler = (event) => {
    if (event.target.name === "username") {
      props.onUsernameChanged(event.target.value);
    }
    if (event.target.name === "age") {
      props.onAgeChanged(event.target.value);
    }
  };

  return (
    <div key={props.name} className={styles["form-control"]}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={inputChangeHandler}
      ></input>
    </div>
  );
};

export default FormControl;
