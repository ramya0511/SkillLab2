import React from 'react';
import cakes from '../data/cakes';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <h2>Welcome to Cake Shop!</h2>
      <div className="featured-cakes">
        {cakes.slice(0, 2).map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.imageUrl} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <Link to={`/cake/${cake.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
