import React from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { signInUsingGoogle, user, logOut } = useAuth();
  // console.log("comes from", typeof signInUsingGoogle);
  const handleGoogle = e => {
    signInUsingGoogle();
    e.preventDefault();
  }
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <NavLink
              className="text-white-50 text-decoration-none fs-3 px-2"
              to="/home"
            >
              NurNaz Travelo
            </NavLink>
            <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0  "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  className="px-2 fs-5 me-3 text-decoration-none text-white-50"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  className="px-2 fs-5 me-3 text-decoration-none"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="px-2 fs-5 me-3 text-decoration-none"
                  to="/destination"
                >
                  Destination
                </NavLink>
                <NavLink
                  className="px-2 fs-5 me-3 text-decoration-none"
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                  className="px-2 fs-5 me-3 text-decoration-none"
                  to="/servicemanage"
                >
                 Service Manage
                </NavLink>
                <NavLink
                  className="px-2 fs-5 me-3 text-decoration-none"
                  to="/contact"
                >
                  Contact
                </NavLink>
                {user.email ? <span className="text-white">{ user.displayName}</span>: <span></span> }
                
              </Nav>

                {user.email? <Button onClick={logOut}>Logout</Button>: <Button onClick={handleGoogle}>Sign In</Button>}
             
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;