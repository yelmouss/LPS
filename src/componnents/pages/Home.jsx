import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectsData } from "../../data/tableaux";
import Carousel from 'react-bootstrap/Carousel';
// import Font, { Text } from "react-font";
import Font from "react-font";
import {
  BsFillSuitHeartFill,
  BsSuitHeart,
  BsEye,
  BsCartPlus,
  BsCurrencyEuro,

} from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";

// import { TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiVanillaFlower } from "react-icons/gi";
const Home = ({ dark, updateDark }) => {
  const [likes, setLikes] = useState([]);
  const [cart, setCart] = useState([]);

  // Récupère les informations sur les likes et le panier à partir du local storage lors du chargement du composant.
  useEffect(() => {
    const likesFromStorage = JSON.parse(localStorage.getItem("likes")) || [];
    setLikes(likesFromStorage);
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartFromStorage);
  }, []);

  // Met à jour le panier et stocke les données dans le local storage.
  const updateCart = useCallback(
    (newCart) => {
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    [setCart]
  );

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
    localStorage.setItem("likes", JSON.stringify(newLikes));
  };

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const newCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      updateCart(newCart);
    } else {
      const newCart = [
        ...cart,
        { id: item.id, price: item.price, quantity: 1 },
      ];
      updateCart(newCart);
    }
  };

  const handleRemoveFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity > 1) {
      const newCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      updateCart(newCart);
    } else {
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      updateCart(newCart);
    }
  };

  return (
    <><Carousel data-bs-theme="dark" className="sticky">
      <Carousel.Item>
        <img
          className="d-block w-100 sliderimg overlay"
          src="https://actinutrition.fr/wp-content/uploads/2020/01/legume-hiver-1000.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h5>Fruits & légumes</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderimg"
          src="./fondation.jpg"
          alt="Second slide" />
        <Carousel.Caption>
          <h5>Produits Alimentaires</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderimg"
          src="https://www.menage-services-perigueux.com/wp-content/uploads/menage-jardinage2-1.jpg"
          alt="Third slide" />
        <Carousel.Caption>
          <h5>Bricolage et jardinage</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Container
        className={`d-flex flex-column min-vh-100 SVGGround ${dark ? "bg-light text-success" : "bg-dark text-success"}`}
        fluid
      >
        <Container className="mt-2 p-2 m-0" fluid>
          <Font family="Roboto">
            <h1 className="fw-bolder  p-2 fs-1 fst-italic">
              Bienvenue dans notre Marché digital BIO <GiVanillaFlower />
            </h1>
          </Font>


          <Row
            xs={1}
            lg={4}
            md={3}
            className="p-2 d-flex justify-content-center"
          >
            {ProjectsData.map((item, i) => {
              const existingCartItem = cart.find(
                (cartItem) => cartItem.id === item.id
              );
              const itemQuantity = existingCartItem
                ? // ? existingCartItem.quantity + " Au panier"
                existingCartItem.quantity
                : 0;
              return (
                <Col className="mt-3" key={i}>
                  <Card className={`${dark ? "" : "text-dark"}`}>
                    <Card.Img
                      className="MyImgCard"
                      variant="top"
                      src={item.image} />
                    <Card.Body>
                      <Card.Text>{item.title}</Card.Text>
                      <Card.Text>
                        {item.price}
                        <BsCurrencyEuro />
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="fs-5 text-dark p-2">
                      <Row>
                        <Col>
                          {itemQuantity ? (
                            <>
                              <CiCircleMinus
                                className="text-danger m-1"
                                onClick={() => handleRemoveFromCart(item)} />
                            </>
                          ) : (
                            ""
                          )}
                          <Link
                            className={itemQuantity ? "text-success fs-5  m-1" : ""}
                            onClick={() => handleAddToCart(item)}
                            style={{ textDecoration: "none" }}
                          >
                            {itemQuantity ? (
                              <>
                                {itemQuantity}
                                <AiOutlinePlusCircle />
                              </>
                            ) : (
                              <BsCartPlus />
                            )}
                          </Link>
                        </Col>
                        <Col className="d-flex justify-content-center gap-2">
                          <Link onClick={() => handleLike(i)}>
                            {likes[i] ? (
                              <BsFillSuitHeartFill className="text-danger" />
                            ) : (
                              <BsSuitHeart />
                            )}
                          </Link>
                          <Link
                            to={"/offre/" + item.id}
                            style={{ textDecoration: "none" }}
                          >
                            <BsEye />
                          </Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container></>
  );
};

export default Home;
