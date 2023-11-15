const usersPosts = ({ posts }) => {
  const numberOfPostsToDisplay = 1;
  return (
    <ul>
        {posts.slice(0, numberOfPostsToDisplay).map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
    </ul>
  );
};

export default usersPosts;