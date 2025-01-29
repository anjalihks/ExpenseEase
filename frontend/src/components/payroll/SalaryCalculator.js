import React, { useState } from 'react';

const SalaryCalculator = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [hra, setHra] = useState('');
  const [da, setDa] = useState('');
  const [totalSalary, setTotalSalary] = useState(null);

  const inputStyle = {
    transform: 'none !important',
    transition: 'none !important',
    boxShadow: 'none !important'
  };

  const calculateSalary = () => {
    const total = parseFloat(basicSalary || 0) + parseFloat(hra || 0) + parseFloat(da || 0);
    setTotalSalary(total);
  };

  return (
    <section className="py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Salary Calculator</h2>
                <p className="text-muted text-center mb-4">
                  Calculate your total salary by entering the components below
                </p>

                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="basicSalary"
                        placeholder="Enter Basic Salary"
                        value={basicSalary}
                        onChange={(e) => setBasicSalary(e.target.value)}
                        style={inputStyle}
                      />
                      <label htmlFor="basicSalary">Basic Salary (₹)</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="hra"
                        placeholder="Enter HRA"
                        value={hra}
                        onChange={(e) => setHra(e.target.value)}
                        style={inputStyle}
                      />
                      <label htmlFor="hra">House Rent Allowance (₹)</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="da"
                        placeholder="Enter DA"
                        value={da}
                        onChange={(e) => setDa(e.target.value)}
                        style={inputStyle}
                      />
                      <label htmlFor="da">Dearness Allowance (₹)</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button 
                      className="btn btn-primary w-100 py-2"
                      onClick={calculateSalary}
                      style={inputStyle}
                    >
                      Calculate Total Salary
                    </button>
                  </div>

                  {totalSalary !== null && (
                    <div className="col-12">
                      <div className="alert alert-success text-center" role="alert" style={inputStyle}>
                        <h4 className="alert-heading mb-2">Total Salary</h4>
                        <h3 className="mb-0">₹{totalSalary.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2
                        })}</h3>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <h5 className="text-muted mb-3">Salary Components:</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Basic Salary
                      <span className="badge bg-primary rounded-pill">
                        ₹{(basicSalary || 0).toLocaleString('en-IN')}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      HRA
                      <span className="badge bg-primary rounded-pill">
                        ₹{(hra || 0).toLocaleString('en-IN')}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      DA
                      <span className="badge bg-primary rounded-pill">
                        ₹{(da || 0).toLocaleString('en-IN')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryCalculator; 