import logo from "./logo.svg";
import "./App.css";
import Header from "./componnents/layout/Navbar";
import Footer from "./componnents/layout/Footer";
import Home from "./componnents/pages/Home";

import { Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import { React, useEffect, useState } from "react";


function App() {

  const [dark, updateDark] = useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  useEffect(() => {
    if (ModeDark) {
      updateDark(ModeDark);
    }
  }, [ModeDark]);


  return (
    <>
      <div className={`App d-flex flex-column min-vh-100`}>
      <Header dark={dark} updateDark={updateDark} />

      <Home dark={dark} updateDark={updateDark} />

      <Footer dark={dark} updateDark={updateDark} />
      </div>
    </>
  );
}

export default App;
