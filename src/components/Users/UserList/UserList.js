import UserListItem from "./UserListItem";
import Card from "../../UI/Card/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
  let listItem = <p>Please add User</p>;
  if (props.users.length > 0) {
    listItem = props.users.map((user) => (
      <UserListItem key={user.id} name={user.name} age={user.age} />
    ));
  }
  return (
    <Card className={styles.users}>
      <ul>{listItem}</ul>
    </Card>
  );
};

export default UserList;
