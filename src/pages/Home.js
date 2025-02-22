// Home.js
import React from "react";
import WhyChooseUs from '../components/whyChooseUs';  
import Testimonials from '../components/Testimonials'; 
import "./Home.css"; 
const Home = () => {
  return (
    <div>
      
      <div className="home-container">
      {/* Background overlay with glassy card */}
      <div className="glass-card">
        <hr></hr>
        <h1>Welcome to BrickX - Your Online Brick Store</h1>
        <hr></hr>
        <br></br>
        <p>
          We offer a wide range of high-quality bricks for all your construction
          needs. Whether you're a professional builder or a DIY enthusiast, we
          have the right bricks for you.
        </p>
        </div>
      </div>
      <WhyChooseUs /> 
      <div className="home-container2">
        <div className="glass-card2">
          <h2 className="online">Why Buy Bricks Online?</h2>
          <br></br>
          <p className="p1">
            In today’s fast-paced world, convenience is key. At BrickX, we
            provide an easy, efficient way to purchase bricks online. With just
            a few clicks, you can select the bricks you need, place your order,
            and have them delivered directly to your doorstep. No more traveling
            to brickfields, waiting in line, or dealing with unreliable
            suppliers.
          </p>
        </div>
        <div className="glass-card3">
          <p className="online1">Our online platform offers</p>
          <hr></hr>
          <ul>
            <li>
              Various types of bricks: full bricks, half bricks, cemented, mud,
              and more.
            </li>
            <li>Easy online ordering with clear pricing.</li>
            <li>Fast and reliable delivery to your location.</li>
            <li>Competitive pricing and bulk purchase discounts.</li>
          </ul>
        </div>
      </div>

      <Testimonials /> 
    </div>
  );
};

export default Home;
