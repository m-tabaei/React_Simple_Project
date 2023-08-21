import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchPosts = async () => {
    try {
      let data = await fetch("http://localhost:3030/posts");
      let res = await data.json();
      setPosts(res);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(true);
      setError(error.massage);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
     <div className="row justify-content-center m-5 p-5">
      {loading && <div className="spinner-border" ></div>}
      {error && <h3 className="text-danger">{error}</h3>}
     {posts &&
        posts.map((elem) => {
          return (
             <Post post={elem} key={elem.id}/>
          );
        })}

     </div>
    </>
  );
};

export default Posts;
