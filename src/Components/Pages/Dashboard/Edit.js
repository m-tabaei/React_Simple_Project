import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  const [id, setId] = useState("");
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      if (id) {
        let data = await fetch(`http://localhost:3030/posts/${id}`);
        let res = await data.json();
        setPost(res);
        setError("");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await fetch(`http://localhost:3030/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: post.title,
          body: post.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      setLoading(false);
      Swal.fire("Success!", "Your post has been updated.", "success");
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="container mx-auto mt-3 ">
      {error && <h3 className="text-danger">{error}</h3>}
      <div className="row">
        <div className="col-6 offset-3 bg-dark p-3 text-white">
          <form onSubmit={handleEdit}>
            <div className="d-block mb-2">
              <label htmlFor="ID">ID</label>
              <input
                type="number"
                placeholder="ID"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                value={post.title}
                onChange={(e) =>
                  setPost((prevState) => ({
                    ...prevState,
                    title: e.target.value,
                  }))
                }
              />
            </div>
            <div className="d-block mb-2">
              <label htmlFor="body">Body</label>
              <textarea
                placeholder="Body"
                className="form-control"
                style={{ height: "150px", resize: "none" }}
                value={post.body}
                onChange={(e) =>
                  setPost((prevState) => ({
                    ...prevState,
                    body: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="d-block mb-2 col-6">
              <button
                type="submit"
                className="btn btn-success text-capitalize mt-4"
                disabled={loading}
              >
                Edit
                {loading && (
                  <div className="spinner-border spinner-border-sm"></div>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="btn btn-info text-capitalize mt-4 mx-2"
              >
                comeBack
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
