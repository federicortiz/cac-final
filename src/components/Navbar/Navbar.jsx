import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_logo.png"
        alt="Fakeflix Logo"
      />

      <div className="nav_menu">
        <a className="nav_item" href="#">
          Inicio
        </a>

        <a className="nav_item" href="#">
          Series
        </a>

        <a className="nav_item" href="#">
          Pelis
        </a>

        <a className="nav_item" href="#">
          Novedades 
        </a>

        <a className="nav_item" href="#">
          Mi lista
        </a>
      </div>

      
    </div>
  );
};

export default Navbar;
