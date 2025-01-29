import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [paymentDetails, setPaymentDetails] = useState({
    upi: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    bank: '',
    accountNumber: '',
    ifsc: ''
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: "799",
      features: ["Up to 100 transactions", "Basic analytics", "Email support"]
    },
    {
      name: "Pro",
      price: "2399",
      features: ["Unlimited transactions", "Advanced analytics", "Priority support"]
    },
    {
      name: "Enterprise",
      price: "3999",
      features: ["Custom solutions", "Dedicated manager", "24/7 support"]
    }
  ];

  const validatePaymentDetails = () => {
    setError('');

    switch (paymentMethod) {
      case 'upi':
        const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{3,}$/;
        if (!upiRegex.test(paymentDetails.upi)) {
          setError('Invalid UPI ID format');
          return false;
        }
        break;

      case 'card':
        // Remove spaces and dashes from card number
        const cardNumber = paymentDetails.cardNumber.replace(/[\s-]/g, '');
        if (!/^\d{16}$/.test(cardNumber)) {
          setError('Invalid card number');
          return false;
        }
        if (!/^[A-Za-z\s]+$/.test(paymentDetails.cardName)) {
          setError('Invalid card holder name');
          return false;
        }
        if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(paymentDetails.expiryDate)) {
          setError('Invalid expiry date (MM/YY)');
          return false;
        }
        if (!/^\d{3}$/.test(paymentDetails.cvv)) {
          setError('Invalid CVV');
          return false;
        }
        break;

      case 'netbanking':
        if (!paymentDetails.bank) {
          setError('Please select a bank');
          return false;
        }
        if (!/^\d{9,18}$/.test(paymentDetails.accountNumber)) {
          setError('Invalid account number');
          return false;
        }
        if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(paymentDetails.ifsc)) {
          setError('Invalid IFSC code');
          return false;
        }
        break;

      default:
        setError('Please select a payment method');
        return false;
    }

    return true;
  };

  const handlePayment = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
    setError('');
    setSuccess(false);
    setPaymentDetails({
      upi: '',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      bank: '',
      accountNumber: '',
      ifsc: ''
    });
  };

  const processPayment = async () => {
    if (!validatePaymentDetails()) {
      return;
    }

    setProcessing(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate success (90% success rate)
      const isSuccess = Math.random() < 0.9;

      if (isSuccess) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/payment-success');
        }, 2000);
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'upi':
        return (
          <div className="mb-3">
            <label className="form-label">UPI ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="yourname@upi"
              value={paymentDetails.upi}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, upi: e.target.value })}
            />
            <small className="text-muted">Example: name@okbank</small>
          </div>
        );

      case 'card':
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                maxLength="19"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Card Holder Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name on card"
                value={paymentDetails.cardName}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardName: e.target.value })}
              />
            </div>
            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                  maxLength="5"
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="123"
                  value={paymentDetails.cvv}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                  maxLength="3"
                />
              </div>
            </div>
          </>
        );

      case 'netbanking':
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Select Bank</label>
              <select
                className="form-select"
                value={paymentDetails.bank}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, bank: e.target.value })}
              >
                <option value="">Choose a bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter account number"
                value={paymentDetails.accountNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, accountNumber: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">IFSC Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="BANK0123456"
                value={paymentDetails.ifsc}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, ifsc: e.target.value })}
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Choose Your Plan</h2>
      <div className="row justify-content-center">
        {plans.map((plan) => (
          <div key={plan.name} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-center">{plan.name}</h5>
                <h2 className="text-center mb-4">₹{plan.price}</h2>
                <ul className="list-unstyled">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handlePayment(plan)}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Payment Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPaymentModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-4">
                  <h6>Selected Plan: {selectedPlan.name}</h6>
                  <h6>Amount: ₹{selectedPlan.price}</h6>
                </div>

                <div className="mb-3">
                  <label className="form-label">Payment Method</label>
                  <select
                    className="form-select"
                    value={paymentMethod}
                    onChange={(e) => {
                      setPaymentMethod(e.target.value);
                      setError('');
                    }}
                  >
                    <option value="upi">UPI</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="netbanking">Net Banking</option>
                  </select>
                </div>

                {renderPaymentForm()}

                {error && (
                  <div className="alert alert-danger">{error}</div>
                )}

                {success && (
                  <div className="alert alert-success">
                    Payment successful! Redirecting...
                  </div>
                )}

                <button
                  className="btn btn-primary w-100"
                  onClick={processPayment}
                  disabled={processing || success}
                >
                  {processing ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Processing...
                    </>
                  ) : (
                    `Pay ₹${selectedPlan.price}`
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
