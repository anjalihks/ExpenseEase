import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Manage Your Finances with Confidence</h1>
              <p className="lead mb-4">
                Track your expenses, analyze investments, and plan your financial future with our comprehensive tools.
              </p>
              <Link to="/dashboard" className="btn btn-light btn-lg">
                Get Started
              </Link>
            </div>
            <div className="col-lg-6">
              <img 
                src="/assets/finance-hero.svg" 
                alt="Finance Management" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-calculator fs-1 text-primary mb-3"></i>
                  <h3 className="h5">Payroll Management</h3>
                  <p className="text-muted">
                    Calculate salaries, taxes, and deductions with our easy-to-use tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-graph-up-arrow fs-1 text-primary mb-3"></i>
                  <h3 className="h5">Investment Analysis</h3>
                  <p className="text-muted">
                    Make informed investment decisions with our advanced analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                  <h3 className="h5">Tax Filing</h3>
                  <p className="text-muted">
                    Simplify your tax calculations and filing process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: '64px', height: '64px'}}>
                  1
                </div>
                <h4>Create Account</h4>
                <p className="text-muted">Sign up and set up your profile in minutes</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: '64px', height: '64px'}}>
                  2
                </div>
                <h4>Input Data</h4>
                <p className="text-muted">Enter your financial information securely</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: '64px', height: '64px'}}>
                  3
                </div>
                <h4>Get Insights</h4>
                <p className="text-muted">Receive detailed analysis and recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Ready to Start?</h2>
              <p className="lead mb-4">
                Join thousands of users who trust our platform for their financial management needs.
              </p>
              <Link to="/pricing" className="btn btn-primary btn-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 