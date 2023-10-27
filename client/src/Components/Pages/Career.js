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
    <Container>
      <Row className="mt-3">
        <Col
          xs={12}
          md={6}
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
                At PetShop, we create marketplaces that offer safe and
                easy-to-use trading platforms and services that are available
                for everyone. And we work together to build a more sustainable
                world through trade.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="p-0 mt-3">
          <img src="../Careerpg/img1.jpg" className="img-fluid" alt="..." />
        </Col>
      </Row>
      <Row className=" mt-4">
        <Row>
          <h1>Our People</h1>
        </Row>
        <Row>
          <Carousel
            id="carouselExampleAutoplaying"
            className="carousel slide"
            interval={4000}
          >
            <Carousel.Item className="carousel-item">
              <Row>
                <Col xs={12} md={4}>
                  <img
                    src="../Careerpg/team.jpg"
                    className="rounded-circle d-block"
                    width={70}
                    height={70}
                    alt="..."
                  />
                </Col>
                <Col xs={12} md={8}>
                  <Row>Saran Kumar</Row>
                  <Row>FullStack Web Developer</Row>
                </Col>
                <Col xs={12}>
                  <p>
                    “Here I feel a strong sense of community and teamwork where
                    everyone is empowered to do great things – together! It’s
                    never boring and always challenging.”
                  </p>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
              <Row>
                <Col xs={12} md={4}>
                  <img
                    src="../Careerpg/team.jpg"
                    className="rounded-circle d-block"
                    width={70}
                    height={70}
                    alt="..."
                  />
                </Col>
                <Col xs={12} md={8}>
                  <Row>Saran Kumar</Row>
                  <Row>FullStack Web Developer</Row>
                </Col>
                <Col xs={12}>
                  <p>
                    “Here I feel a strong sense of community and teamwork where
                    everyone is empowered to do great things – together! It’s
                    never boring and always challenging.”
                  </p>
                </Col>
              </Row>
            </Carousel.Item>

            <Button
              className="carousel-control-prev"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </Button>
            <Button
              className="carousel-control-next"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </Button>
          </Carousel>
        </Row>
      </Row>
      <Row className="mt-3 bg-body-secondary">
        <Col xs={12} md={6} className="p-0">
          <img src="../Careerpg/img2.jpg" className="img-fluid" alt="..." />
        </Col>
        <Col
          xs={12}
          md={6}
          className="p-3 p-sm-5 cardside_font text-light d-flex justify-content-center align-items-center flex-column"
        >
          <h1>Why Should I Join PetShop?</h1>
          <p>
            From the things we do together to the things we do differently,
            PetShop is a place for everyone. We’ve gathered the top ten reasons
            why people choose to join – and stay – with the team here.
          </p>
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
  );
};

export default Career;
