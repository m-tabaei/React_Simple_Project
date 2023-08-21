import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Delete = () => {
  const [id, setId] = useState(""); 
  const navigate = useNavigate();
  const DeleteAll=async()=>{try {
    let request=await fetch(`http://localhost:3030/posts`,{
      method:"DELETE"
    })
    let res=await request.json()
    console.log(res)
  } catch (error) {
    
  }

  }
  const deletePost = async (id) => {
    try {
      let response = await fetch(`http://localhost:3030/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Post has been deleted successfully.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while deleting the post.",
        });
      }
      navigate("/dashboard"); 

    } catch (error) {
      console.log(error.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while deleting the post.",
      });
    }
  };

  const handleDelete = () => {
    if (id.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid ID.",
      });
      return;
    }

    deletePost(id);
  };

  return (
    <div className="container mx-auto mt-3">
      <div className="row">
        <div className="col-6 offset-3 bg-dark p-3 text-white">
          <div className="delete d-block mb-2">
            <label htmlFor="ID">ID</label>
            <input
              type="text"
              placeholder="ID"
              className="form-control"
              value={id} 
              onChange={(e) => setId(e.target.value)} 
            />
          </div>
          <div className="d-block mb-2">
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
            <button onClick={DeleteAll}  className="deleteButton btn btn-danger mx-2 ">
              Delete All Post
            </button>
            <button onClick={() => navigate("/dashboard")} className="btn btn-info text-capitalize  mx-2">comeBack</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
