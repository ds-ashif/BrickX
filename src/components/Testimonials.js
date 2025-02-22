// Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  { id: 1, name: 'Pankaj Shukla', text: 'Great quality bricks! Delivered on time.' },
  { id: 2, name: 'Gaurav Sharma', text: 'Affordable and reliable supplier. Highly recommended!' },
  { id: 3, name: 'Om Singh', text: 'The service was top-notch. Will buy again for my next project.' },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className='t'>What Our Customers Say</h2>
      <hr className='t'></hr>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
