//Footer page....
import React from "react";
import Footer from "../styles/Footer.css";
const Footerpage = () => {
  return (
    <body className="footer" id="footer">
      <div className="footer__listitem">
        <h5 className="footer__listitem--heading" data-testid="getintouch">
          Get In touch
        </h5>
        <p className="footer__listitem--heading" data-testid="farmersfriend">
          Farmers Friend 👩‍👩‍👧
        </p>
        <p className="footer__listitem--heading" data-testid="Kanpur">
          Kanpur, Uttar Pradesh
        </p>
        <p className="footer__listitem--heading" data-testid="phone">
          8957907453
        </p>
        <p className="footer__listitem--heading" data-testid="email" id="mail">
          richapandey0297@gmail.com
        </p>
      </div>
    </body>
  );
};
export default Footerpage;
