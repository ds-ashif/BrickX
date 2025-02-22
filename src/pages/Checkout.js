import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const { state } = useLocation();
  const { brickType, quantity, address, totalPrice } = state;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <h2 className="card-title text-primary">Checkout</h2>
          <p className="text-muted">Please review your order details before proceeding to payment.</p>
          <hr />
          <div className="mb-3">
            <p className="fw-bold">Brick Type: <span className="text-muted">{brickType}</span></p>
            <p className="fw-bold">Quantity: <span className="text-muted">{quantity}</span></p>
            <p className="fw-bold">Delivery Address: <span className="text-muted">{address}</span></p>
            <p className="fw-bold">Total Price: <span className="text-success">₹{totalPrice}</span></p>
          </div>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => alert('Redirecting to UPI Payment...')}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
