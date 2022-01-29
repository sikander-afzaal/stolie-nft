import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
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
      <Link
        style={{ textDecoration: "none", color: "white" }}
        className="header-left"
        to="/"
      >
        <img src={logo} alt="..." />
        <p>MetaHomies</p>
      </Link>

      <div className={`header-right ${open ? "open" : ""}`}>
        <nav>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/#hero"
            className="nav-links"
          >
            What are MetaHomies?
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/#bene"
            className="nav-links"
          >
            Benefits
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/#roadmap"
            className="nav-links"
          >
            Roadmap
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/"
            className="nav-links"
          >
            Rarity
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/"
            className="nav-links"
          >
            Partners
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/#team"
            className="nav-links"
          >
            Team
          </a>
          <a
            onClick={() => {
              setOpen(false);
              document.querySelector("body").classList.remove("overflow");
            }}
            href="/"
            className="nav-links"
          >
            FAQ
          </a>
        </nav>
        <Link
          onClick={() => {
            setOpen(false);
            document.querySelector("body").classList.remove("overflow");
          }}
          to="/mint-page"
        >
          <button className="btn-header whitepaper">MINT</button>
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
            document.querySelector("body").classList.remove("overflow");
          }}
          to="/stacking"
        >
          <button className="btn-header mint-tick">STAKE TO EARN</button>
        </Link>

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
