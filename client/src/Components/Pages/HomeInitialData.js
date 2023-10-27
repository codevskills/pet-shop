import React, { useState, useEffect } from "react";
import { Container, Row, Button, Card } from "react-bootstrap";
import axios from "axios";

const HomeInitialData = () => {
  const [Products, setProducts] = useState([]);
  console.log("Data received: ", Products);

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
      <Row className="p-5">
        {Products.map((Product) => (
          <Card style={{ width: "18rem" }} key={Product.p_id}>
            <Card.Img variant="top" src={Product.p_image} />
            <Card.Body>
              <Card.Title>{Product.p_name}</Card.Title>
              <Card.Text>{Product.p_discription}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default HomeInitialData;
