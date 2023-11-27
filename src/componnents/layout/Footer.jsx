import React from "react";

import { BiLogoWhatsapp } from "react-icons/bi";


function Footer({ dark, updateDark }) {
  return (
    <>
      <footer className={`footer py-3 sticky-bottom ${dark ? "bg-light" : "bg-dark"} bg-opacity-75`} >
        <div className="container">
          <span className="text-muted">
            Powered by yelmouss - {new Date().getFullYear()} Copyright ©{" "}
          </span>
        </div>
      </footer>

      <a
        href="https://wa.me/212612865681?text=Hi%20yelmouss"
        className="floating"
        target="_blank" rel="noreferrer"
      > <BiLogoWhatsapp  className="my-float" /> </a>
    </>
  );
}
export default Footer;
