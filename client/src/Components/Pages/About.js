import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Pages/About.scss";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src="./dog-img-1.avif" className="img-fluid" alt="..." />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default About;
