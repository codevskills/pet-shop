import React from "react";
import PetNavbar from "../Common/Navbar";
import { Container, Row } from "react-bootstrap";
import PetMenubar from "../Common/Menubar";
import HomeInitialData from "./HomeInitialData";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <PetNavbar />
      </Row>
      <Row>
        <PetMenubar />
      </Row>
      <Row>
        <HomeInitialData />
      </Row>
    </Container>
  );
};

export default Home;
