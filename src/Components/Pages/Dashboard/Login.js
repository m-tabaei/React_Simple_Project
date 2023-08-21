import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!loggedIn) {
    return (
      <div className=" text-white text-left col-4 justify-content-center bg-dark offset-3 ">
        <Form>
         <Form.Group className="m-4  col-10" controlId="formBasicEmail">
            <Form.Label>Username or Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="m-4 col-10" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Save Password" />
      </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleLogin}
            className="text-capitalize m-5"
            style={{ width: "150px" }}
          >
            Login
          </Button>
      <Button
        onClick={handleLogout}
        variant="danger"
        className="text-capitalize"
        style={{ width: "150px" }}
      >
        Logout
      </Button>
        </Form>
      </div>
    );
  }

  return (
    <div className="d-block text-center">
        <p>Enter your Account</p>
    </div>
  );
};

export default Login;
