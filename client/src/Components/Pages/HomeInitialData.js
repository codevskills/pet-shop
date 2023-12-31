import React, { useState, useEffect } from "react";
import { Container, Row, Button, Card, Col } from "react-bootstrap";
import axios from "axios";

const HomeInitialData = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://653b56b22e42fd0d54d4ef64.mockapi.io/pet/api/petshop")
      .then((res) => {
        // console.log("Data received: ", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Row>
        {Products.map((Product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={Product.p_id}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Product.p_image} />
              <Card.Body>
                <Card.Title>{Product.p_name}</Card.Title>
                <Card.Text>{Product.p_discription}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeInitialData;
