import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="mb-4">Terms of Service</h1>
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-4">
                <h2 className="h4 mb-3">1. Acceptance of Terms</h2>
                <p>By accessing and using FinTrack, you accept and agree to be bound by the terms and conditions of this agreement.</p>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3">2. Use License</h2>
                <p>Permission is granted to temporarily access the materials (information or software) on FinTrack's website for personal, non-commercial transitory viewing only.</p>
                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by FinTrack at any time.</p>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3">3. User Responsibilities</h2>
                <ul>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Provide accurate information</li>
                  <li>Comply with all applicable laws</li>
                  <li>Not use the service for illegal purposes</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3">4. Service Modifications</h2>
                <p>FinTrack reserves the right to:</p>
                <ul>
                  <li>Modify or discontinue services</li>
                  <li>Change pricing with notice</li>
                  <li>Update terms and conditions</li>
                  <li>Limit service availability</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3">5. Limitation of Liability</h2>
                <p>FinTrack shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
              </section>

              <section>
                <h2 className="h4 mb-3">6. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at:</p>
                <ul>
                  <li>Email: legal@fintrack.com</li>
                  <li>Phone: 1-800-FINTRACK</li>
                  <li>Address: 123 Finance Street, Business District, 12345</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 