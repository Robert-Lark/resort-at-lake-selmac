import React from "react";
import "../src/styles/header.css";
import logo from "../src/assets/logo.png";
import tepee from "../src/assets/tepee.png";

function Header() {
  return (
    <div className="header_outer">
      <div className="layer_1">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path
            className="svg_color"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="svg_color"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="svg_color"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </div>
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1>RESORT AT LAKE SELMAC</h1>
      </header>
      <div className="links">
        {/* <span className="tepee span_1">
          <img src={tepee} id="first_tepee" alt="tepee" />
          <a href="/fun-around-the-resort">Fun Around the Resort</a>
          <img src={tepee} id="first_tepee" alt="tepee" />
        </span>

        <span className="tepee span_2">
          <img src={tepee} id="second_tepee" alt="tepee" />
          <a href="/gallery">Photo Gallery</a>
          <img src={tepee} id="second_tepee" alt="tepee" />
        </span>

        <span className="tepee span_3">
          <img src={tepee} id="third_tepee" alt="tepee" />
          <a href="/history-of-the-lake">History of the Lake</a>
          <img src={tepee} id="third_tepee" alt="tepee" />
        </span>

        <span className="tepee span_4">
          <img src={tepee} id="fourth_tepee" alt="tepee" />
          <a href="/rates">Rates</a>
          <img src={tepee} id="fourth_tepee" alt="tepee" />
        </span> */}

        {/* facebook logo */}
        {/* instagram logo */}
      </div>
    </div>
  );
}

export default Header;
