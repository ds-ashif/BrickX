import React from 'react';
import { Link } from 'react-router-dom';

const BrickCard = ({ brick }) => (
  <div className="card shadow-sm h-100">
    <img src={brick.image} className="card-img-top" alt={brick.type} style={{ height: '200px', objectFit: 'cover' }} />
    <div className="card-body text-center">
      <h5 className="card-title fw-bold">{brick.type}</h5>
      <p className="card-text text-muted">{brick.description}</p>
      <Link to={`/brick-details/${brick.id}`} className="btn btn-primary btn-sm w-100">View Details</Link>
    </div>
  </div>
);

export default BrickCard;
