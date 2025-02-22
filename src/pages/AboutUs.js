import React, { useState } from 'react';
import './AboutUs.css';  // Import the CSS file for custom styles

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">About Us</h2>
      <div className="about-us-content border p-5 rounded shadow-lg mb-5">
        <p className="text-center text-muted mb-4">
          At BrickX, we are committed to simplifying construction by bringing traditional brick sales online. With our easy-to-use platform, you can browse, select, and purchase high-quality bricks for your construction needs. From residential to commercial projects, we ensure timely delivery and exceptional customer service.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-center text-primary mb-3">Why Choose BrickX?</h4>
            <p className="text-muted">
              We believe that brickwork should be accessible, easy, and reliable. At BrickX, we provide the best in class bricks with a streamlined purchasing process. Our customer-centric approach ensures that you get exactly what you need, on time and with the highest quality.
            </p>
          </div>
          <div className="col-lg-6">
            <h4 className="text-center text-primary mb-3">Our Promise</h4>
            <p className="text-muted">
              From the first brick to the last, BrickX promises quality. Our extensive catalog allows you to find the right materials for your project. Our team works diligently to ensure timely delivery and customer satisfaction. Trust us to make your construction projects easier.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Form */}
      <div className="contact-form p-5 border rounded shadow-lg">
        <h3 className="text-center text-primary mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
