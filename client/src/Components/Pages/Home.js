import React from "react";
import PetNavbar from "../Common/Navbar";
import {Container,Row, Col} from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid>
      <Row><PetNavbar/></Row>
    </Container>
  );
};

export default Home;
