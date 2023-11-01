import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Container,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PetNavbar() {
  const navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState(null);

  const storedUserName = localStorage.getItem("loginUserName");
  const storedUserProfile = localStorage.getItem("loginUserImage");

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          localStorage.setItem("loginUserName", resObject.user.username);
          localStorage.setItem("loginUserImage", resObject.user.userProfile);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const logoutHandler = () => {
    if (storedUserName) {
      localStorage.removeItem("loginUserName");
      localStorage.removeItem("loginUserImage");
      window.open("http://localhost:5000/auth/logout", "_self");
      navigate("/");
    }
  };

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {storedUserProfile ? (
              <div className="center">
                <img
                  src={storedUserProfile}
                  width={40}
                  height={40}
                  alt=""
                  className="mx-2 rounded-circle"
                />
              </div>
            ) : (
              <></>
            )}
            {storedUserName || storedUserProfile ? (
              <Button
                onClick={() => {
                  logoutHandler();
                }}
              >
                Logout
              </Button>
            ) : (
              <Button onClick={handleShow}>Login</Button>
            )}
            <Nav.Link eventKey={2} href="/sell">
              Sell
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="Model">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center align-items-center">
            <button className="google_btn border" onClick={google}>
              <img src="/images/google.png" alt="google icon" />
              <span>Sign in with Google</span>
            </button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Navbar>
  );
}

export default PetNavbar;
