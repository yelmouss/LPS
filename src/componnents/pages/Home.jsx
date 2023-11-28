import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectsData } from "../../data/tableaux";
import Carousel from 'react-bootstrap/Carousel';
import Font from "react-font";
import {
  BsFillSuitHeartFill,
  BsSuitHeart,
  BsEye,
  BsCartPlus,
  BsCurrencyEuro,
} from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiVanillaFlower } from "react-icons/gi";
import Slila from "./Slila";
import Mycarousel from "../layout/Mycarousel";

const Home = ({ dark, updateDark }) => {
  const [likes, setLikes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const likesFromStorage = JSON.parse(localStorage.getItem("likes")) || [];
    setLikes(likesFromStorage);
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartFromStorage);
  }, []);

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

  const ManageCart = ({ item, itemQuantity }) => (
    <><div className="card-body">
      <h2> {item.price} MAD </h2>
    </div><Row className="ManageCart bg-light fs-4 d-flex flex-row bg-opacity-75 rounded" lg={1} xs={1} md={1}>
        <Col className="p-2">
          {itemQuantity ? (
            <>
              <CiCircleMinus
                className="text-danger"
                onClick={() => handleRemoveFromCart(item)} />
            </>
          ) : (
            ""
          )}
          <Link
            className={itemQuantity ? "text-success" : ""}
            onClick={() => handleAddToCart(item)}
            style={{ textDecoration: "none" }}
          >
            {itemQuantity ? (
              <>
                <span> {itemQuantity} </span>
                <AiOutlinePlusCircle />
              </>
            ) : (
              <BsCartPlus />
            )}
          </Link>
      
        </Col>
      </Row>
      <Row className="fs-5"> 
        <Col>
        <Link onClick={() => handleLike(item.id)}>
            {likes[item.id] ? (
              <BsFillSuitHeartFill className="text-danger" />
            ) : (
              <BsSuitHeart />
            )}
          </Link>
          </Col>
          <Col>
          <Link to={"/offre/" + item.id} style={{ textDecoration: "none" }}>
            <BsEye />
          </Link>
          </Col>
      </Row>
      
      </>
  );


  const Details = ({ item }) => (

    <>
      <div className="card">
        <h5>  {item.title}  </h5>
        <h2>{item.price} MAD</h2>
      </div><hr />
    </>
  )
  return (
    <>
      <Mycarousel />
      <Container className={`d-flex flex-column min-vh-100 SVGGround  ${dark ? "bg-dark text-success" : "bg-light text-black"}`} fluid>
        <Container className="p-2 m-0 " fluid>
        
          <Row xs={1} lg={5} md={3} className="p-2 d-flex justify-content-center align-items-center">
            {ProjectsData.map((item, i) => {
              const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);
              const itemQuantity = existingCartItem ? existingCartItem.quantity : 0;
              return (
                <Col className="p-2" key={i}>
                  <Slila
                    t9edia={item.image}
                    comande={<ManageCart item={item} itemQuantity={itemQuantity} price={item.title} />}
                    details={<Details item={item} />} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
