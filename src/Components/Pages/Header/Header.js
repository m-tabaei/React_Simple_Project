
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="bg-dark">
      <Nav.Item as="li">
        <NavLink href="/home" to="/" className={(navDate) =>
                navDate.isActive
                  ? "nav-link text-white bg-success"
                  : "nav-link text-white"
              }>Home</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink  to="/posts" className={(navDate) =>
                navDate.isActive
                  ? "nav-link text-white bg-success"
                  : "nav-link text-white"
              }> Posts</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink  to="/users" className={(navDate) =>
                navDate.isActive
                  ? "nav-link text-white bg-success"
                  : "nav-link text-white"
              }> Users</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink  to="/login" className={(navDate) =>
                navDate.isActive
                  ? "nav-link text-white bg-success"
                  : "nav-link text-white"
              }>Login </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
