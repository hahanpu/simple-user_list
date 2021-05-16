import styles from "./BackDrop.module.css";

const BackDrop = (props) => {
  return (
    <div
      className={`${styles.backdrop} ${props.className || ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default BackDrop;
