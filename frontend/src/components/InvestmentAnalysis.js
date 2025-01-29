import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './InvestmentAnalysis.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InvestmentAnalysis = () => {
  const [monthlySavings, setMonthlySavings] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('Low');
  const [investmentSuggestions, setInvestmentSuggestions] = useState([]);
  const [chartData, setChartData] = useState(null);

  const inputStyle = {
    transform: 'none !important',
    transition: 'none !important',
    boxShadow: 'none !important'
  };

  const handleAnalyze = () => {
    const suggestions = [];
    const years = 5; // Project for 5 years
    const growthData = [];
    const monthlyAmount = parseFloat(monthlySavings) || 0;

    // Define growth rates based on risk tolerance
    let annualRate;
    switch (riskTolerance) {
      case 'Low':
        annualRate = 0.06; // 6% annual return
        suggestions.push(
          'Consider Fixed Deposits (5-7% return)',
          'Look into Government Bonds',
          'Invest in Blue-chip stocks'
        );
        break;
      case 'Medium':
        annualRate = 0.12; // 12% annual return
        suggestions.push(
          'Consider Mutual Funds',
          'Mix of Equity and Debt funds',
          'Index Funds tracking Nifty 50'
        );
        break;
      case 'High':
        annualRate = 0.18; // 18% annual return
        suggestions.push(
          'Consider Small-cap stocks',
          'Cryptocurrency investments',
          'High-yield bonds'
        );
        break;
      default:
        annualRate = 0.06;
    }

    // Calculate growth for each year
    let totalInvestment = 0;
    for (let year = 1; year <= years; year++) {
      totalInvestment = (monthlyAmount * 12 * year) * Math.pow(1 + annualRate, year);
      growthData.push(Math.round(totalInvestment));
    }

    setInvestmentSuggestions(suggestions);
    setChartData({
      labels: Array.from({ length: years }, (_, i) => `Year ${i + 1}`),
      datasets: [
        {
          label: 'Projected Growth',
          data: growthData,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Investment Growth Projection',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value.toLocaleString('en-IN')}`
        }
      }
    }
  };

  return (
    <section className="py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Investment Analysis</h2>
                <p className="text-muted text-center mb-4">
                  Plan your investments based on your risk tolerance and monthly savings
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="monthlySavings"
                        placeholder="Enter Monthly Savings"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(e.target.value)}
                        style={inputStyle}
                      />
                      <label htmlFor="monthlySavings">Monthly Savings (₹)</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <select
                        className="form-select"
                        id="riskTolerance"
                        value={riskTolerance}
                        onChange={(e) => setRiskTolerance(e.target.value)}
                        style={inputStyle}
                      >
                        <option value="Low">Low Risk</option>
                        <option value="Medium">Medium Risk</option>
                        <option value="High">High Risk</option>
                      </select>
                      <label htmlFor="riskTolerance">Risk Tolerance</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button 
                      className="btn btn-primary w-100 py-2"
                      onClick={handleAnalyze}
                      style={inputStyle}
                    >
                      Analyze Investment
                    </button>
                  </div>

                  {chartData && (
                    <div className="col-12 mt-4">
                      <div className="card">
                        <div className="card-body">
                          <Bar data={chartData} options={chartOptions} />
                        </div>
                      </div>
                    </div>
                  )}

                  {investmentSuggestions.length > 0 && (
                    <div className="col-12">
                      <div className="card mt-4">
                        <div className="card-body">
                          <h5 className="card-title">Investment Suggestions</h5>
                          <ul className="list-group list-group-flush">
                            {investmentSuggestions.map((suggestion, index) => (
                              <li key={index} className="list-group-item">
                                {suggestion}
                              </li>
                            ))}
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

export default InvestmentAnalysis;
