import React from "react";
import PetNavbar from "../Common/Navbar";
import { Container, Row } from "react-bootstrap";
import PetMenubar from "../Common/Menubar";
import HomeInitialData from "./HomeInitialData";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer";


const Home = () => {
  const userId = useSelector((state) => state.userData.userId);
  const userEmail = useSelector((state) => state.userData.userEmail);

  console.log("########", userId, userEmail);
  return (
    <Container fluid>
      <Row>
        <PetNavbar />
      </Row>
      <Row>
        <PetMenubar />
      </Row>
      <Container className="py-5">
        <HomeInitialData />
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
