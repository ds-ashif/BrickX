// WhyChooseUs.js
import React from 'react';
import './whyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <hr />
      <div className="features">
        <div className="feature">
          <img src="images/typesbrick.jpeg" alt="Wide Variety of Bricks" className="feature-image" />
          <h3>Wide Variety of Bricks</h3>
          <p>Choose from full, half, cemented, and more types of bricks.</p>
        </div>
        <div className="feature">
          <img src="images/price.jpeg" alt="Affordable Prices" className="feature-image" />
          <h3>Affordable Prices</h3>
          <p>Get the best price for your construction needs.</p>
        </div>
        <div className="feature">
          <img src="images/delivery.jpeg" alt="Fast & Reliable Delivery" className="feature-image" />
          <h3>Fast & Reliable Delivery</h3>
          <p>We deliver your order directly to your location on time.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
