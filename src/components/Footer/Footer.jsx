import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="Homzy logo" width={120} />
          <span className="secondaryText">
            Our vision is to make the best place to live <br />
            available to all people.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            123 Unknown road, London, N4 6SS, United Kingdom
          </span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
