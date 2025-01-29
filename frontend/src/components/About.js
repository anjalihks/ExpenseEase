import React from 'react';

const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">About ExpenseEase</h2>
            <p className="mt-3">
              ExpenseEase is the ultimate solution for seamless payment management.
              Designed for businesses of all sizes, our platform helps you handle
              transactions efficiently, securely, and effortlessly.
            </p>
            <p>
              Our mission is to empower businesses with tools to simplify payment
              processes, save time, and enhance customer experiences.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://framerusercontent.com/images/F3BzYQjHmEPoe0X0YmHXSTO2hiE.png"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
