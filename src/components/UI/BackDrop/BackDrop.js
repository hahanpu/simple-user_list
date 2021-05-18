import ReactDOM from "react-dom";

import styles from "./BackDrop.module.css";

const BackDropOverlay = (props) => {
  return (
    <div
      className={`${styles.backdrop} ${props.className || ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <BackDropOverlay onClick={props.onClick} children={props.children} />,
    document.getElementById("overlay-root")
  );
};

export default BackDrop;
