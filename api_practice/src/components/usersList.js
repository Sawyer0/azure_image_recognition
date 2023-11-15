const usersList = ({ users }) => {
  const numberOfUsersToDisplay = 1;
  return (
    <ul>
      {users.slice(0, numberOfUsersToDisplay).map((user) => (
        <div key={user.id}>
          <li>{user.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default usersList;
