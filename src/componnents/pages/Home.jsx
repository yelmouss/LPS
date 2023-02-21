import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {BsFillSuitHeartFill,BsSuitHeart,BsEye }  from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
const Home = () => {
  return (
    <Container
      className=" d-flex flex-column min-vh-100 SVGGround bg-light"
      fluid
    >
      <Container className="mt-2">
        <Row xs="auto" lg={4} md={3}>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0068/0283/3463/files/tableau-decoratif-design-massinart_350x.jpg?v=1644578629"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className="fs-5 text-dark">
                <Card.Link href="#"><TfiShoppingCartFull /></Card.Link>
                <Card.Link href="#"><BsSuitHeart /></Card.Link>
                <Card.Link href="#"><BsEye /></Card.Link>                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0068/0283/3463/files/tableau-decoratif-design-massinart_350x.jpg?v=1644578629"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0068/0283/3463/files/tableau-decoratif-design-massinart_350x.jpg?v=1644578629"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0068/0283/3463/files/tableau-decoratif-design-massinart_350x.jpg?v=1644578629"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
