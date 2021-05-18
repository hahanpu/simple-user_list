import BackDrop from "../BackDrop/BackDrop";
import Button from "../Button/Button";
import Card from "../Card/Card";

import styles from "./ErrorModal.module.css";

const Modal = (props) => {

  const stopEventHandler = (event) => {
    event.stopPropagation();
  }

  return (
    <BackDrop onClick={props.onConfirm}>
      <Card className={styles.modal} onClick={stopEventHandler}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </BackDrop>
  );
};

export default Modal;
