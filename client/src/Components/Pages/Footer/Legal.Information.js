import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "Legalpg.css"

const Legalinformation = () => {
  return (
    <Container fluid>
      <Row></Row>
      <Row className="text-center mt-5">
        <div>
          <p>Never scan QR code or share your OTP with anyone.</p>
        </div>
      </Row>
      <Row className="text-center">
        <div>
          <p>
            Please beware of using unsolicited modes for money transaction(s)
            other than known & safe payment methods
          </p>
        </div>
      </Row>
      <Row className="text-center my-5">
        <Row className="fw-bold">
          <div>
            <p>Legal & Privacy information</p>
          </div>
        </Row>
        <Col><a href="/termsandcondition">Terms & Condition</a></Col>
        <Col><a href="/privacypolicy">Privacy Policy</a></Col>
      </Row>
    </Container>
  );
};

export default Legalinformation;
