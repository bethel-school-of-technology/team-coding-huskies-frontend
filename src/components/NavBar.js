import { Stack, Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function NavBar() {
 const { isAuthenticated, handleLogout } = useContext(UserContext);

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="/">PIHOP</Navbar.Brand>
          <Nav className="me-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/logout" onClick={handleLogout}>
                  Logout
                </Nav.Link>
                <Nav.Link as={Link} to="/podcast">PodCast</Nav.Link>
                <Nav.Link as={Link} to="/users/:id">Profile</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">Log In</Nav.Link>
                <Nav.Link as={Link} to="/create-account">Create Account</Nav.Link>
                <Nav.Link as={Link} to="/podcast">PodCast</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet> 
          
        </Outlet>
      </Stack>
    </>
  );
}

export default NavBar;