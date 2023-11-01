import { useState, useEffect } from "react";
import { Button, Modal, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import {
  loginUserId,
  loginUserName,
  loginUserEmail,
  loginUserImage
} from "../Redux/ReduxUserData/UserDataAction";
import { useDispatch, useSelector } from "react-redux";

function PetNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState(null);
  const userId = useSelector((state) => state.userData.userId);
  const userName = useSelector((state) => state.userData.userName);
  const userImage = useSelector((state) => state.userData.userImage);

  console.log("<><>", userId, userName, userImage);

  const handleGoogleLogin = () => {
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
        .then((res) => {
          setUser(res.user);
          console.log(res.user);
          dispatch(loginUserId(res.user._id));
          dispatch(loginUserName(res.user.username));
          dispatch(loginUserEmail(res.user.email));
          dispatch(loginUserImage(res.user.userProfile));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const logoutHandler = () => {
    if (userName) {
      localStorage.removeItem("loginUserId");
      localStorage.removeItem("loginUserName");
      localStorage.removeItem("loginUserEmail");
      localStorage.removeItem("loginUserImage");
      window.open("http://localhost:5000/auth/logout", "_self");
      navigate("/");
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <div class="search-box center">
              <button class="btn-search center">
                <FaSearch className="fas fa-search" />
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
              />
            </div>
          </Nav>
          <Nav>
            {userImage ? (
              <div className="center">
                <img
                  src={userImage}
                  width={40}
                  height={40}
                  alt=""
                  className="mx-2 rounded-circle"
                />
              </div>
            ) : (
              <></>
            )}
            {userName || userImage ? (
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
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="d-flex justify-content-center align-items-center">
            <button className="google_btn border" onClick={handleGoogleLogin}>
              <img src="/images/google.png" alt="google icon" />
              <span>Sign in with Google</span>
            </button>
          </Modal.Body>
        </Modal>
      </div>
    </Navbar>
  );
}

export default PetNavbar;
