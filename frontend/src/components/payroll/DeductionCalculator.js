import React, { useState } from 'react';

const DeductionCalculator = () => {
  const [salary, setSalary] = useState('');
  const [deductions, setDeductions] = useState({
    pf: 0,
    professionalTax: 0,
    incomeTax: 0,
    insurance: 0
  });

  const inputStyle = {
    transform: 'none !important',
    transition: 'none !important',
    boxShadow: 'none !important'
  };

  const calculateDeductions = () => {
    const baseSalary = parseFloat(salary || 0);
    
    // Calculate various deductions
    const pf = baseSalary * 0.12; // 12% PF
    const professionalTax = 200; // Fixed PT
    const insurance = baseSalary * 0.01; // 1% insurance
    
    // Basic income tax calculation
    let incomeTax = 0;
    const annualSalary = baseSalary * 12;
    if (annualSalary > 500000) {
      incomeTax = baseSalary * 0.1; // 10% for demonstration
    }

    setDeductions({
      pf,
      professionalTax,
      incomeTax,
      insurance
    });
  };

  return (
    <section className="py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Deduction Calculator</h2>
                <p className="text-muted text-center mb-4">
                  Calculate your salary deductions based on your monthly salary
                </p>

                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="salary"
                        placeholder="Enter Monthly Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        style={inputStyle}
                      />
                      <label htmlFor="salary">Monthly Salary (₹)</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button 
                      className="btn btn-primary w-100 py-2"
                      onClick={calculateDeductions}
                      style={inputStyle}
                    >
                      Calculate Deductions
                    </button>
                  </div>

                  {salary && (
                    <div className="col-12">
                      <div className="card mt-4">
                        <div className="card-body">
                          <h5 className="card-title text-center mb-4">Monthly Deductions</h5>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Provident Fund (12%)
                              <span className="badge bg-primary rounded-pill">
                                ₹{deductions.pf.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Professional Tax
                              <span className="badge bg-primary rounded-pill">
                                ₹{deductions.professionalTax.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Income Tax
                              <span className="badge bg-primary rounded-pill">
                                ₹{deductions.incomeTax.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Insurance (1%)
                              <span className="badge bg-primary rounded-pill">
                                ₹{deductions.insurance.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                              Total Deductions
                              <span className="badge bg-primary rounded-pill">
                                ₹{(
                                  deductions.pf + 
                                  deductions.professionalTax + 
                                  deductions.incomeTax + 
                                  deductions.insurance
                                ).toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                              </span>
                            </li>
                          </ul>
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

export default DeductionCalculator;