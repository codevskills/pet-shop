import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Carousel, Button } from "react-bootstrap";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Career = () => {
  const [reqData, setReqData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/req-get")
      .then((res) => {
        setReqData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-center align-items-center bg-body-secondary p-3 p-sm-5"
          >
            <Card
              style={{ width: "100%" }}
              className="card_container border-primary"
            >
              <Card.Body>
                <Card.Title>
                  <h1>Careers At PetShop</h1>
                </Card.Title>
                <Card.Text className="mt-4">
                  Welcome to <strong>PetShop</strong> Career Page! We're
                  delighted that you're considering joining our team. At{" "}
                  <strong>PetShop</strong>, we believe that our success is
                  driven by the talent, dedication, and passion of our
                  employees. We are always on the lookout for exceptional
                  individuals who are eager to make a difference and contribute
                  to our mission.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} className="p-0 d-flex align-items-center" style={{ position: "relative" }}>
            <div
              className="bg-image"
              style={{
                backgroundImage: "url(../Careerpg/img1.jpg)",
                filter: "blur(0px)", // You can adjust the blur intensity
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1
              }}
            ></div>
            <img src="../Careerpg/img1.jpg" className="img-fluid" alt="..." />
          </Col>
        </Row>
        <Row className=" mt-4 why_choose_career_content">
          <Row>
            <h1>Our Values</h1>
          </Row>
          <Row></Row>
        </Row>
        <Row className="mt-3">
          <Col xs={12} lg={6} className="p-0 d-flex align-items-center" style={{ position: "relative" }}>
            <div
              className="bg-image"
              style={{
                backgroundImage: "url(../Careerpg/img2.jpg)",
                filter: "blur(0px)", // You can adjust the blur intensity
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1
              }}
            ></div>
            <img src="../Careerpg/img2.jpg" className="img-fluid" alt="..." />
          </Col>

          <Col xs={12} lg={6} className="cardside_font text-light">
            <h1>Why Choose PetShop?</h1>
            <ul className="custom-bullet-list ">
              <li>
                <div>
                  <div className="fw-bold">Innovative Culture</div>
                  Join a dynamic and innovative workplace where you'll have the
                  opportunity to work on cutting-edge projects and solutions.
                </div>
              </li>
              <li>
                <div>
                  <div className="fw-bold">Career Development</div>
                  We are committed to helping our employees grow, both
                  personally and professionally.
                </div>
              </li>
              <li>
                <div>
                  <div className="fw-bold">Collaborative Environment</div>
                  Be a part of a diverse and collaborative team that values open
                  communication, teamwork, and creative problem-solving.
                </div>
              </li>
            </ul>
            <a href="/buttons/41" className="btn41-43 btn-41 mt-4">
              Apply
            </a>
          </Col>
        </Row>

        <Row>
          {reqData.map((user, index) => (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>s/no</th>
                  <th>Id</th>
                  <th>Role</th>
                  <th>Location</th>
                  <th>PostedDate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.index + 1}</td>
                  <td>{user.reqId}</td>
                  <td>{user.reqRole}</td>
                  <td>{user.reqLocation}</td>
                  <td>{user.reqDate}</td>
                </tr>
              </tbody>
            </Table>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Career;
