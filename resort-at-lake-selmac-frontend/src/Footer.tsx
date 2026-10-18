import React from "react";
import "../src/styles/footer.css";
import logo from "./assets/logo.webp";

type props = { loading: boolean };

function Footer(props: props) {
  const { loading } = props;
  return loading ? (
    <></>
  ) : (
    <div className="footer">
      <address className="contact">
        <h2>Resort at Lake Selmac</h2>
        <div className="contact_row">
          <img src={logo} alt="Resort at Lake Selmac logo" />
          <div className="contact_details">
            <b>Call for Reservations</b>
            <a href="tel:+15415972277">541-597-2277</a>
            <span>
              2700 Lake Shore Drive
              <br />
              Selma, Oregon 97538
            </span>
          </div>
        </div>
        <p>
          Located 2.5 miles east off the Redwood Highway 199 just 20 miles
          south of Grants Pass Oregon.
        </p>
      </address>
      <a href="#top" className="back_to_top">
        <p>⬆️</p>
        <p>Return to top of page </p>
      </a>
    </div>
  );
}

export default Footer;
