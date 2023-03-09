import "./header.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ rl }) {
  const navigate = useNavigate();
  if (rl === "rl") {
    return (
      <div className="headercl">
        <div className="text1">
          <img src="./Logo.png" alt="" className="imglogo" />
          <h1>Sport Recommend</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="headercl">
        <div className="text1 cur" onClick={(e)=>{navigate("/Home")}}>
          <img src="./Logo.png" alt="" className="imglogo" />
          <h1>Sport Recommend</h1>
        </div>

        <div className="text2">
          <a href="#faq">FAQ |</a>
          <a href="#about">About |</a>
          <a href="#contract">Contact |</a>
          <a href="https://fitjunctions.com/blog/">Blog |</a>
        </div>
      </div>
    );
  }
}
