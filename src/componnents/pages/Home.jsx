import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectsData } from "../../data/tableaux";
import Font, { Text } from "react-font";
import { BsFillSuitHeartFill, BsSuitHeart, BsEye } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";

const Home = ({ dark, updateDark }) => {
  const [likes, setLikes] = useState([]);

  // Récupère les informations sur les likes à partir du local storage lors du chargement du composant.
  useEffect(() => {
    const likesFromStorage = JSON.parse(localStorage.getItem("likes")) || [];
    setLikes(likesFromStorage);
  }, []);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
    localStorage.setItem("likes", JSON.stringify(newLikes));
  };

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };




  return (
    <Container
      className={`d-flex flex-column min-vh-100 SVGGround ${
        dark ? "bg-light text-dark" : "bg-dark text-light"
      }`}
      fluid
    >
      <Container className="mt-2 p-2">
        <Font family="Zeyada">
          <h1 className="fw-bolder  p-2 fs-1">
            Bienvenue dans notre galerie digitale artistique
          </h1>
        </Font>
        <Row
          xs="auto"
          lg={4}
          md={3}
          className="p-2 d-flex justify-content-center"
        >
              {ProjectsData.map((item, i) => {
          const existingCartItem = cart.find(
            (cartItem) => cartItem.id === item.id
          );
          const itemQuantity = existingCartItem ? existingCartItem.quantity : 0;

          return (
         
            <Col className="mt-3" key={i}>
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
                  <Card.Link
                    className={itemQuantity ? "text-warning" : ""}
                    onClick={() => handleAddToCart(item)}
                  >
                    <TfiShoppingCartFull />
                    {itemQuantity ? <span className="ms-2">{itemQuantity}</span> : null}
                  </Card.Link>
                  <Card.Link onClick={() => handleLike(i)}>
                    {likes[i] ? (
                      <BsFillSuitHeartFill color="red" />
                    ) : (
                      <BsSuitHeart />
                    )}
                  </Card.Link>
                  <Card.Link href="#">
                    <BsEye />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
           );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
