import { useState, useEffect } from "react";
import axios from 'axios';

const useFetchPosts = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [url]);

  return { data, error, loading };
};

export default useFetchPosts;