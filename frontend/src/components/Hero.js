import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">Power Your Payments with ExpenseEase</h1>
            <p className="lead mt-3">The simplest way to manage payments for your business.</p>
            
            {!isAuthenticated ? (
              <div>
                <Link to="/signup" className="btn btn-light btn-lg mt-4 me-3">Sign Up Now</Link>
                <Link to="/login" className="btn btn-light btn-lg mt-4">Login</Link>
              </div>
            ) : (
              <div>
                <Link to="/dashboard" className="btn btn-light btn-lg mt-4">Go to Dashboard</Link>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <img
              src="https://framerusercontent.com/images/CHhbWIwjBVUkS43koZq9VGSsgg.png"
              alt="Payments Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
