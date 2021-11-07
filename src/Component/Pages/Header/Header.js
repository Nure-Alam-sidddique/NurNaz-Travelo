import React from 'react';
import {
  Button,
  Container, Dropdown, Nav,
  Navbar
} from "react-bootstrap";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  const { signInUsingGoogle, user, logOut } = useAuth();
  // console.log("comes from", typeof signInUsingGoogle);
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
  const handleGoogle = e => {
    signInUsingGoogle().then(result => {
      history.push(redirect_uri);
    })
    e.preventDefault();
  }
    return (
      <div>
        <Navbar bg="dark" expand="lg" >
          <Container fluid >
            <NavLink
              className="text-white-50 text-decoration-none fs-3 px-2"
              as={HashLink}
              to="/home#home"
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
                  to="/myorders"
                >
                  MyOrders
                </NavLink>

                <NavLink
                  className="px-2 fs-5 me-3 text-decoration-none"
                  to="/contact"
                >
                  Contact
                </NavLink>
                {user.email ? (
                  <span className="text-primary fs-5 text-align-center">
                    {user.displayName}
                  </span>
                ) : (
                  <span></span>
                )}
              </Nav>

              {user.email && (
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Admin
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      {user.email && (
                        <NavLink
                          className="px-2 fs-5 me-3 text-decoration-none"
                          to="/services"
                        >
                          Add Services
                        </NavLink>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      {user.email && (
                        <NavLink
                          className="px-2 fs-5 me-3 text-decoration-none"
                          to="/servicemanage"
                        >
                          Service Manage
                        </NavLink>
                      )}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              {user.email ? (
                <Button onClick={logOut}>Logout</Button>
              ) : (
                <Button
                  className={{ marginRight: "20px" }}
                  onClick={handleGoogle}
                >
                  Sign In
                </Button>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;