import React from "react";
import "./Body.css";
import "animate.css/animate.min.css";

export default function Body() {
  return (
    <div className="body">
      <div className="left">
        <h1>
          <span className="highlight">
            High-<span className="highlight-pcs">End</span>
          </span>{" "}
          <br />
          Custom Build <br />
          <span className="highlight-pcs">PCs</span>
        </h1>
        <h4>
          Book a <span className="highlight" ><a style={{textDecoration:"none", color:"#0087ca"}} href="/contact">Free Consultation </a></span> Now!
        </h4>
      </div>
      <div className="right">
        <img src="https://static.vecteezy.com/system/resources/previews/038/848/998/non_2x/3d-rendered-gaming-pc-free-png.png" alt="Gaming PC" />
      </div>
    </div>
  );
}
