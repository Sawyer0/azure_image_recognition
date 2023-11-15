const usersList = ({users}) => {
  const numberOfUsersToDisplay = 1;
  return (
    <ul>
      {users.slice(0,numberOfUsersToDisplay).map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
};

export default usersList;
