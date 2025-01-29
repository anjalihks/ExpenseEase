import React, { useState } from 'react';
import SalaryCalculator from './payroll/SalaryCalculator';
import TaxFiling from './payroll/TaxFiling';
import DeductionCalculator from './payroll/DeductionCalculator';
import './payroll/PayrollStyles.css';

const PayrollAutomation = () => {
  const [activeTab, setActiveTab] = useState('salary');

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2 className="text-center mb-4">Payroll Automation</h2>
          
          <div className="mb-4">
            <select 
              className="form-select"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="salary">Salary Calculator</option>
              <option value="tax">Tax Filing</option>
              <option value="deduction">Deduction Calculator</option>
            </select>
          </div>

          <div>
            {activeTab === 'salary' && <SalaryCalculator />}
            {activeTab === 'tax' && <TaxFiling />}
            {activeTab === 'deduction' && <DeductionCalculator />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollAutomation; 