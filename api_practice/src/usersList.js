import useFetchUsers from "./useFetchUsers";

const UsersList = () => {
  const {
    data: users,
    error,
    loading,
  } = useFetchUsers("https://jsonplaceholder.typicode.com/users");
  console.log(users)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  const numberOfUsersToDisplay = 1;

  return (
    <ul>
      {users.slice(0, numberOfUsersToDisplay).map(user => (
        <li key={user.id}>{user.name}</li>
      ))}

    </ul>
  );
};

export default UsersList;
