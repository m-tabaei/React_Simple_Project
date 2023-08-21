import { useCallback, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./User.css";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eroor, setError] = useState("");
  const fetchUsers = useCallback(async () => {
    try {
      let data = await fetch("http://localhost:3030/users");
      let res = await data.json();
      setUsers(res);
      console.log(res);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(true);
    }
  });
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="col-10 offset-1 text-center" >
        {users &&
          users.map((elem) => {
            return (
              <Card
                className="d-inline-block mx-2 mt-2 bg-dark text-white"
                style={{ width: "18rem" } }key={elem.id}
              >
                <Link className="text-white" to={`/users/${elem.id}`}>
                {elem.name}
              </Link>
                <ListGroup variant="flush">
                  <ListGroup.Item>{elem.name}</ListGroup.Item>
                  <ListGroup.Item>{elem.username}</ListGroup.Item>
                  <ListGroup.Item>{elem.email}</ListGroup.Item>
                  <ListGroup.Item>{elem.phone}</ListGroup.Item>
                  <ListGroup.Item>{elem.company.name}</ListGroup.Item>
                </ListGroup>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Users;
