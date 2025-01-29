import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomepageSection from './components/HomepageSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import SalaryCalculator from './components/payroll/SalaryCalculator';
import DeductionCalculator from './components/payroll/DeductionCalculator';
import TaxFiling from './components/payroll/TaxFiling';
import InvestmentAnalysis from './components/InvestmentAnalysis';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard';
import PaymentSuccess from './components/PaymentSuccess';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

import './App.css';

const App = () => {
  const [grossSalary, setGrossSalary] = useState(0); // Gross salary state
  const [totalDeductions, setTotalDeductions] = useState(0); // Total deductions state

  // Handler to update gross salary
  const handleGrossSalaryUpdate = (gross) => {
    setGrossSalary(gross);
  };

  // Handler to update total deductions
  const handleDeductionsUpdate = (deductions) => {
    setTotalDeductions(deductions);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Features />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/investment-analysis" element={<InvestmentAnalysis />} />

            {/* Payroll Automation Routes */}
            <Route
              path="/salary-calculator"
              element={<SalaryCalculator onGrossSalaryUpdate={handleGrossSalaryUpdate} />}
            />
            <Route
              path="/deduction-calculator"
              element={
                <DeductionCalculator
                  grossSalary={grossSalary}
                  onDeductionsUpdate={handleDeductionsUpdate}
                />
              }
            />
            <Route
              path="/tax-filing"
              element={
                <TaxFiling grossSalary={grossSalary} totalDeductions={totalDeductions} />
              }
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
