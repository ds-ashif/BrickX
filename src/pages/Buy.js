import React from 'react';
import { Link } from 'react-router-dom';

const bricks = [
  { id: 1, name: 'Full Brick', price: 10, img: '/images/full-brick.jpg' },
  { id: 2, name: 'Half Brick', price: 8, img: '/images/half-brick.jpg' },
  { id: 3, name: 'Cemented Brick', price: 12, img: '/images/cemented-brick.jpg' },
  { id: 4, name: 'Mud Brick', price: 6, img: '/images/mud-brick.jpg' },
  { id: 5, name: 'Coloured Brick', price: 15, img: '/images/coloured-brick.jpg' },
];

const Buy = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Choose Your Bricks</h2>
      <div className="row">
        {bricks.map(brick => (
          <div className="col-md-4 mb-4" key={brick.id}>
            <div className="card shadow-lg">
              <img src={brick.img} className="card-img-top" alt={brick.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{brick.name}</h5>
                <p className="text-muted">Price: ₹{brick.price} per piece</p>
                <Link to={`/brick-details/${brick.id}`} className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
