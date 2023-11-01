import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="p-0">
      <Row className="my-5">
        <div class="custom-shape-divider-top-1698589152">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <Col xs={12} sm={6} className="">
          <span>
            <h1 className="t-c my-4">ABOUT</h1>
          </span>
          <p className=" fw-bold ">
            "Welcome to our pet shop ,the wonderful world of pet seals! We are
            passionate advocates for these charming and intelligent marine
            mammals and are thrilled to share our love for them with you.
          </p>
          <a href="/" class="btn1">
            Read More
          </a>
        </Col>
        <Col xs={12} sm={6} className="center ">
          <img
            src="./About_image/img-1.jpg"
            className="img-fluid rounded"
            alt="..."
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12} sm={6} className="center ">
          <img
            src="./About_image/img-2.jpg"
            className="img-fluid rounded"
            alt="..."
          />
        </Col>
        <Col xs={12} sm={6} className=" ">
          <span>
            <h3 className="t-c my-4">OUR MISSION</h3>
          </span>
          <p className=" fw-bold">
            At pet shop, our mission is to promote awareness and understanding
            of pet seals and provide a platform for seal enthusiasts to connect
            and learn about these incredible creatures. We believe that by
            fostering a deeper appreciation for seals, we can contribute to
            their conservation and well-being in the wild.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} sm={6}>
          <span>
            <h4 className="my-4">OUR STORE</h4>
          </span>
          <ul className=" ">
            <li>
              <b>Wide Selection:</b> We offer a diverse range of pets, from
              playful puppies and kittens to colorful birds and intriguing
              reptiles. You're sure to find the perfect addition to your family
              here
            </li>
            <li>
              <b>Quality Supplies:</b> Alongside our pets, we provide
              top-quality pet supplies, including nutritious food, engaging
              toys, cozy bedding, and stylish accessories.
            </li>
            <li>
              <b>Expert Advice:</b> Our knowledgeable staff is always available
              to answer your questions and provide guidance on pet care. We're
              here to support you at every step of your pet-parenting journey
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} className="center ">
          <img
            src="./About_image/img-5.jpg"
            className="img-fluid rounded "
            alt="..."
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} sm={6}>
          <span>
            <h4 className="my-4">OUR Commitment</h4>
          </span>
          <ul className="">
            <li>
              <b>Animal Welfare:</b> We prioritize the health and happiness of
              our animals. Rest assured, all our pets receive the best care and
              attention.
            </li>
            <li>
              <b>Community Involvement</b> We actively engage with the local pet
              community through events, adoption drives, and educational
              programs.
            </li>
            <li>
              <b>Customer Satisfaction:</b> Your satisfaction is our utmost
              priority. We aim to create a positive and enjoyable shopping
              experience for you and your pets.
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} className="center ">
          <img
            src="./About_image/img-1.jpg"
            className="img-fluid rounded"
            alt="..."
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Row>
          <h3 className="t-c my-5">OUR BRANDS</h3>
        </Row>
        <Col className=" my-3 j-c">
          <a
            href="https://www.codevskills.com/html/introduction"
            target="_blank"
          >
            <div
              className="card shadow-sm border border-primary-subtle"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <p className="card-text t-c tw-bold">CCSCHOOLS</p>
              </div>
            </div>
          </a>
        </Col>
        <Col className=" my-3 j-c">
          <a
            href="https://www.codevskills.com/html/introduction"
            target="_blank"
          >
            <div
              className="card shadow-sm border border-primary-subtle"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <p className="card-text tw-bold t-c">CODEV SKILLS</p>
              </div>
            </div>
          </a>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12} md={12}>
          <Row>
            <h2 className="t-c my-3">CONTACT </h2>
          </Row>
          <div className=" t-c px-4 fw-bold my-3">
            <p>
              If you have any problem & suggestions for this website then you
              can contact us by using following contact details.
            </p>
          </div>

          <div class="custom-shape-divider-bottom-1698592075">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="my-4 position-relative">
            <img
              src="../About_image/img-7.png"
              alt=""
              className=" img-fluid  opacity-100 bg-dark w-100  rounded"
            />
            <div className="contact_position fw-bold  text-light pt-3">
              <p>Name : PET SHOP</p>
              <p>Email : inovvijay@gmail.com</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;