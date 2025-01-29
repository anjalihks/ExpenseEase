import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>© {new Date().getFullYear()} FinTrack. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy" className="text-white me-3">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-white">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
