const UserListItem = (props) => {
  return (
    <li className={props.className}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default UserListItem;
