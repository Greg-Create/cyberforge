import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {" "}
      <div className="header">
        <img className="logo" src={"/cyberForge_logo.png"} />
        <h1>CyberForge</h1>
      </div>
      <div className="options">
        <p>About Us</p>
        <p>Gallery</p>
        <p>Custom PCs</p>
        <p>Consultation</p>
        <p>Pre-Build PCs</p>
      </div>
      <button>Contact Us</button>
    </div>
  );
}
