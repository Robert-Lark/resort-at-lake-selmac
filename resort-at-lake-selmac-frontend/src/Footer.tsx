import React from "react";
import "../src/styles/footer.css";
import contactInfo from "./assets/contactInfo.png";

type props = { loading: boolean };

function Footer(props: props) {
  const { loading } = props;
  return loading ? (
    <></>
  ) : (
    <div className="footer">
      <img src={contactInfo} alt="contactInfo" />
      <a href="#top">
        <p>⬆️</p>
        <p>Return to top of page </p>
      </a>
    </div>
  );
}

export default Footer;
