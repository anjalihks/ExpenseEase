import React from 'react';

const HomepageSection = () => {
  return (
    <div className="d-flex align-items-center" style={{ background: '#EAF5FF', height: '100vh' }}>
      <div className="container text-center">
        <h1 className="mb-4">Supercharge your business with ExpenseEase</h1>
        <p className="mb-4">
          Sign up now to streamline your expenses and offer the best experience for your business needs.
        </p>
        <button className="btn btn-primary btn-lg">Sign Up Now</button>
        <ul className="list-unstyled mt-4">
          <li>✔ Quick onboarding</li>
          <li>✔ Access to entire product suite</li>
          <li>✔ 24/7 support</li>
        </ul>
      </div>
      <div>
        <img
          src="path_to_image_or_illustration"
          alt="Illustration"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HomepageSection;