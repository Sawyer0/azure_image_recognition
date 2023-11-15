import axios from "axios";
import { useState } from "react";

const AddPost = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );

      setTitle("");
      setbody("");

      if (onAddPost) {
        onAddPost(response.data);
      }
    } catch (error) {
      console.error("Error adding posts:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setbody(e.target.value)}
        placeholder="Body"
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
