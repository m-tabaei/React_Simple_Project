import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate=useNavigate()
  const comeback=()=>{
    navigate("/posts")
  }
  const fetchPost = async () => {
    try {
      let data = await fetch(`http://localhost:3030/posts/${id}`);
      let res = await data.json();
      setPost(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPost();
  });
  return (
    <>
      {post && (
        <Card
          className="d-inline-block mx-2 m-5 bg-dark text-white"
          style={{ width: "18rem" }}     
        >
          
            {post.title.substr(0, 10)}
          
          <ListGroup variant="flush">
            <ListGroup.Item>{post.body.substr(0, 50)}</ListGroup.Item>
            <ListGroup.Item><button onClick={comeback} className="btn btn-dark text-capitalize">comeBack</button></ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </>
  );
};

export default Show;
