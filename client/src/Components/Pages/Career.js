import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Carousel, Button } from "react-bootstrap";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { AiOutlineSelect } from "react-icons/ai";

const Career = () => {
  const [reqData, setReqData] = useState([
    {
      reqId: 1,
      reqRole: "Software Engineer",
      reqLocation: "New York",
      reqDate: "2023-10-28"
    },
    {
      reqId: 2,
      reqRole: "Data Analyst",
      reqLocation: "San Francisco",
      reqDate: "2023-10-29"
    },
    {
      reqId: 3,
      reqRole: "Product Manager",
      reqLocation: "Los Angeles",
      reqDate: "2023-10-30"
    }
  ]);

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
          <Col
            xs={12}
            lg={6}
            className="p-0 d-flex align-items-center"
            style={{ position: "relative" }}
          >
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
        <Row className="my-3 p-3 p-md-5 why_choose_career_content">
          <h1 className=" text-center p-3">Our Values</h1>
          <span className=" text-center ">
            <strong>
              At PetShop our core values guide everything we do. We're looking
              for candidates who resonate with these principles:
            </strong>
          </span>
          <ul className="custom-bullet-list ps-5 m-0">
            <li>
              <div className=" my-3">
                <div className="fw-bold ">Excellence</div>
                We strive for excellence in all that we do, aiming to
                continuously improve and exceed expectations.
              </div>
            </li>
            <li>
              <div>
                <div className="fw-bold">Integrity</div>
                We conduct our business with the highest ethical standards,
                ensuring honesty, transparency, and trust.
              </div>
            </li>
            <li>
              <div className=" my-3">
                <div className="fw-bold">Innovation</div>
                We embrace creativity and innovation, always seeking new and
                better ways to achieve our goals.
              </div>
            </li>
            <li>
              <div>
                <div className="fw-bold">Teamwork</div>
                Collaboration and teamwork are at the heart of our success,
                fostering a supportive and inclusive workplace.
              </div>
            </li>
            <li>
              <div className=" my-3">
                <div className="fw-bold">Client-Centric</div>
                Our clients are central to our mission, and we prioritize their
                needs and satisfaction.
              </div>
            </li>
          </ul>
        </Row>
        <Row className="mt-3">
          <Col
            xs={12}
            lg={6}
            className="p-0 d-flex align-items-center"
            style={{ position: "relative" }}
          >
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

          <Col xs={12} lg={6} className="cardside_font text-light ps-5 py-3">
            <h1 className=" text-center">Why Choose PetShop?</h1>
            <ul className="custom-bullet-list ">
              <li>
                <div className=" p-3">
                  <div className="fw-bold">Innovative Culture</div>
                  Join a dynamic and innovative workplace where you'll have the
                  opportunity to work on cutting-edge projects and solutions.
                </div>
              </li>
              <li>
                <div className=" p-3">
                  <div className="fw-bold">Career Development</div>
                  We are committed to helping our employees grow, both
                  personally and professionally.
                </div>
              </li>
              <li>
                <div className=" p-3">
                  <div className="fw-bold">Collaborative Environment</div>
                  Be a part of a diverse and collaborative team that values open
                  communication, teamwork, and creative problem-solving.
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className=" opportunities_container p-3 p-md-5 my-3 text-light">
          <Col>
            <h1>Current Opportunities:</h1>
            <p>
              Below, you'll find a list of our current job openings. Click on
              each to learn more about the position, qualifications, and
              application instructions.
            </p>
          </Col>

          <Col>
            <h1>Application Process:</h1>
            <p>
              To apply, please follow the instructions provided in each job
              posting. We appreciate your interest in joining{" "}
              <strong>PetShop</strong> and we look forward to considering your
              application.
            </p>
          </Col>
        </Row>
        <Row className=" bg-body-secondary p-3 my-3 p-md-5">
          <h1>Join Our Team:</h1>
          <p>
            If you're ready to make a difference, grow your career, and be part
            of an exceptional team, we invite you to explore our current career
            opportunities. We're excited to learn more about you and what you
            can bring to our company.
          </p>
        </Row>
        {/* job openings table */}
        <Row>
          <h3 className=" text-center bg-dark text-light p-2 mb-3">
            Job Openings
          </h3>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Role</th>
                <th>Location</th>
                <th>PostedDate</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              {reqData.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.reqId}</td>
                  <td>{user.reqRole}</td>
                  <td>{user.reqLocation}</td>
                  <td>{user.reqDate}</td>
                  <td className=" d-flex justify-content-center align-items-center">
                    {" "}
                    <a href="/buttons/41" className="btn41-43 btn-41 ">
                      Apply
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default Career;
