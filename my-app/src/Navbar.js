import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (window.location.pathname === "/contact" || window.location.pathname==="/custom") {
      setScrolled(true);
    }
  }, []);

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
        <h1 style={{cursor:"pointer"}} onClick={()=>navigate("/")}>CyberForge</h1>
      </div>
      { <div className={`options`}>
        <a href="#custom" onClick={() => setIsMobileMenuOpen(false)}>Custom PCs</a>
        <a href="#prebuild" onClick={() => setIsMobileMenuOpen(false)}>Pre-Built PCs</a>
        <a href="#tradein" onClick={() => setIsMobileMenuOpen(false)}>Trade-In</a>
        <a href="#repairs" onClick={() => setIsMobileMenuOpen(false)}>Repairs</a>
        <a href="#aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
      </div>
      }
     
   <button className="contact-button" onClick={() => { navigate("/contact"); setScrolled(true); setIsMobileMenuOpen(false); }}>Contact Us</button>
 
      <button className="hamburger-button" onClick={toggleMobileMenu}>
        ☰
      </button>
      {
        isMobileMenuOpen? 
        <>
        <div className="sideBar">

        <a href="#custom" onClick={() => setIsMobileMenuOpen(false)}>Custom PCs</a>
        <a href="#prebuild" onClick={() => setIsMobileMenuOpen(false)}>Pre-Built PCs</a>
        <a href="#tradein" onClick={() => setIsMobileMenuOpen(false)}>Trade-In</a>

        <a href="#repairs" onClick={() => setIsMobileMenuOpen(false)}>Repairs</a>
        <a href="#aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
        <button className=" sideBarbtn" onClick={() => { navigate("/contact"); setScrolled(true); setIsMobileMenuOpen(false); }}>Contact Us</button>
        <button className="close-button" onClick={toggleMobileMenu}>
        X
      </button>
        </div>
        
        </>:""
      }
    </div>
  );
}
