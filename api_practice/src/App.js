import UsersList from "./components/usersList";
import useFetchUsers from "./customHooks/useFetchUsers";

function App() {
  const {
    data: users,
    error,
    loading,
  } = useFetchUsers("https://jsonplaceholder.typicode.com/users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;


  return (
    <div>
      <h1>Users</h1>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
