import React, { useState } from 'react';

const TaxFiling = () => {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [taxableIncome, setTaxableIncome] = useState(null);
  const [taxAmount, setTaxAmount] = useState(null);

  const inputStyle = {
    transform: 'none !important',
    transition: 'none !important',
    boxShadow: 'none !important'
  };

  const calculateTax = () => {
    const taxable = Math.max(0, parseFloat(income || 0) - parseFloat(deductions || 0));
    setTaxableIncome(taxable);

    // Basic tax calculation (simplified)
    let tax = 0;
    if (taxable <= 250000) {
      tax = 0;
    } else if (taxable <= 500000) {
      tax = (taxable - 250000) * 0.05;
    } else if (taxable <= 1000000) {
      tax = 12500 + (taxable - 500000) * 0.2;
    } else {
      tax = 112500 + (taxable - 1000000) * 0.3;
    }

    setTaxAmount(tax);
  };

  return (
    <section className="py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Tax Filing Calculator</h2>
                <p className="text-muted text-center mb-4">
                  Calculate your income tax based on your annual income and deductions
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="income"
                        placeholder="Enter Annual Income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        style={inputStyle}
                      />
                      <label htmlFor="income">Annual Income (₹)</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="deductions"
                        placeholder="Enter Total Deductions"
                        value={deductions}
                        onChange={(e) => setDeductions(e.target.value)}
                        style={inputStyle}
                      />
                      <label htmlFor="deductions">Total Deductions (₹)</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button 
                      className="btn btn-primary w-100 py-2"
                      onClick={calculateTax}
                      style={inputStyle}
                    >
                      Calculate Tax
                    </button>
                  </div>

                  {taxableIncome !== null && (
                    <div className="col-12">
                      <div className="card mt-4">
                        <div className="card-body">
                          <h5 className="card-title text-center mb-4">Tax Calculation Summary</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Total Income
                              <span className="badge bg-primary rounded-pill">
                                ₹{parseFloat(income || 0).toLocaleString('en-IN')}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Total Deductions
                              <span className="badge bg-primary rounded-pill">
                                ₹{parseFloat(deductions || 0).toLocaleString('en-IN')}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Taxable Income
                              <span className="badge bg-primary rounded-pill">
                                ₹{taxableIncome.toLocaleString('en-IN')}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                              Tax Amount
                              <span className="badge bg-primary rounded-pill">
                                ₹{taxAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                              </span>
                            </li>
                          </ul>

                          <div className="mt-4">
                            <h6 className="text-muted mb-3">Tax Slabs:</h6>
                            <ul className="list-group list-group-flush small">
                              <li className="list-group-item">Up to ₹2.5L: No tax</li>
                              <li className="list-group-item">₹2.5L to ₹5L: 5%</li>
                              <li className="list-group-item">₹5L to ₹10L: 20%</li>
                              <li className="list-group-item">Above ₹10L: 30%</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxFiling; 