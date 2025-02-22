import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BrickDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');

  
  const brickPrices = {
    1: 10, // Full Brick
    2: 8,  // Half Brick
    3: 12, // Cemented Brick
    4: 6,  // Mud Brick
    5: 15, // Coloured Brick
  };

  const brickTypes = {
    1: "Full Brick",
    2: "Half Brick",
    3: "Cemented Brick",
    4: "Mud Brick",
    5: "Coloured Brick",
  };

  const brickPrice = brickPrices[id] || 0; // Default price is 0 if id is invalid
  const brickType = brickTypes[id] || "Unknown Brick";

  const handleCheckout = () => {
    navigate('/checkout', { 
      state: { 
        id, 
        brickType, 
        quantity, 
        address, 
        totalPrice: brickPrice * quantity 
      } 
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center text-primary">Brick Details</h2>
          <p className="text-muted text-center">Brick Type: {brickType}</p>
          <p className="text-muted text-center">Price per Brick: ₹{brickPrice}</p>
          <form className="mt-4" onSubmit={e => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label fw-bold">Number of Bricks</label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Delivery Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
                required
              />
            </div>
            <button className="btn btn-success w-100" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrickDetails;
