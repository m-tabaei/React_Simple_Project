import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <>
      <Card
        className="d-inline-block mx-2 mt-2 bg-dark text-white"
        style={{ width: "18rem" }}
        key={post.id}
      >
        <Link className="text-white" to={`/posts/${post.id}`}>
          <p className="btn bg-white text-dark fw-bolder  mt-3 ">Number of Posts {post.id}</p>
        </Link>
        <ListGroup variant="flush">
        
          <ListGroup.Item className="bg-info-subtle bg-opacity-50  fw-bold">{post.title.substr(0, 10)}</ListGroup.Item>
          <ListGroup.Item className="mb-3" >{post.body.substr(0, 50)}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Post;
