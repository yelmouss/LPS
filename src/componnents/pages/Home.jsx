import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectsData } from "../../data/tableaux";
import Font, { Text } from "react-font";
import { BsFillSuitHeartFill, BsSuitHeart, BsEye } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
const Home =  ({ dark, updateDark }) => {
  return (
    <Container
    className={`d-flex flex-column min-vh-100 SVGGround ${dark ? "bg-light text-dark" : "bg-dark text-light"}`} 
      fluid
    >
      <Container className="mt-2 p-2">
        <Font family="Zeyada">
          <h1 className="fw-bolder  p-2">
            {" "}
            Bienvenue dans notre galerie digitale artistique
          </h1>
        </Font>
        <Row xs="auto" lg={4} md={3} className="p-2">
          {ProjectsData.map((item, i) => (
            <Col className="mt-2">
              <Card className={`${dark ? "" : "text-dark"}`}>
                <Card.Img
                  className="MyImgCard"
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.price} $</Card.Text>
                </Card.Body>
                <Card.Body className="fs-5 text-dark">
                  <Card.Link href="#">
                    <TfiShoppingCartFull />
                  </Card.Link>
                  <Card.Link href="#">
                    <BsSuitHeart />
                  </Card.Link>
                  <Card.Link href="#">
                    <BsEye />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
