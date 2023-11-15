import { useState } from "react";
import UsersList from "./components/usersList";
import UsersPosts from "./components/usersPosts";
import useFetchUsers from "./api/useFetchUsers";
import useFetchPosts from "./api/useFetchPosts";
import AddPost from "./components/addPosts";

function App() {
  const [newPosts, setNewPosts] = useState([]);

  const {
    data: users,
    usersError,
    usersLoading,
  } = useFetchUsers("https://jsonplaceholder.typicode.com/users");
  const {
    data: posts,
    postsError,
    postsLoading,
  } = useFetchPosts("https://jsonplaceholder.typicode.com/posts");
  
  const handlePostAdded = (newPost) => {
    setNewPosts(currentPosts => [...currentPosts, newPost]);
  };

  if (usersLoading) return <div>Loading...</div>;
  if (usersError) return <div>Error fetching users</div>;

  if (postsLoading) return <div>Loading...</div>;
  if (postsError) return <div>Error fetching users</div>;


  return (
    <div>
      <h1>Users</h1>
      <UsersList users={users}/>
      <h1>Posts</h1>
      <AddPost onAddPost={handlePostAdded} />
      <UsersPosts posts={posts} />
    </div>
  );
}

export default App;
