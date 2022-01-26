import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
function Header() {
  // to open navbar in mobile view
  const [open, setOpen] = useState(false);
  // to show the black background when we scroll
  const [show, setShow] = useState(false);
  // scroll to add background color ------------------------
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  // scroll to add background color ------------------------
  return (
    <div className={`header ${open ? "open" : ""} ${show && "black"}`}>
      <div className="header-left">
        <img src={logo} alt="..." />
        <p>MetaHomies</p>
      </div>
      <div className={`header-right ${open ? "open" : ""}`}>
        <nav>
          <a href="..." className="nav-links">
            What are MetaHomies?
          </a>
          <a href="..." className="nav-links">
            Benefits
          </a>
          <a href="..." className="nav-links">
            Roadmap
          </a>
          <a href="..." className="nav-links">
            Rarity
          </a>
          <a href="..." className="nav-links">
            Partners
          </a>
          <a href="..." className="nav-links">
            Team
          </a>
          <a href="..." className="nav-links">
            FAQ
          </a>
        </nav>
        <button className="btn-header whitepaper">MINT</button>
        <button className="btn-header mint-tick">STAKE TO EARN</button>
        <div className="social-header">
          <i className="fab fa-discord header-social"></i>
          <i className="fab fa-twitter header-social"></i>
          <i className="fab fa-telegram header-social"></i>
        </div>

        {/* <i className="fas fa-times mobile"></i> */}
      </div>
      <i
        onClick={() => {
          document.querySelector("body").classList.toggle("overflow");
          setOpen((prev) => {
            return !prev;
          });
        }}
        className={`fas ${open ? "fa-times" : "fa-bars"} mobile`}
      ></i>
    </div>
  );
}

export default Header;
