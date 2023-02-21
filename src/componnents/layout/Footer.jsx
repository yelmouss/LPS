import React from "react";

import { BiMessageAltDetail } from "react-icons/bi";


function Footer({ dark, updateDark }) {
  return (
    <>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">
            Powered by Geeks - {new Date().getFullYear()} Copyright ©{" "}
          </span>
        </div>
      </footer>

      <a
        href="https://wa.me/212612865681?text=Hi%20yelmouss"
        class="floating"
        target="_blank" rel="noreferrer"
      > <BiMessageAltDetail className="my-float" /> </a>
    </>
  );
}
export default Footer;
