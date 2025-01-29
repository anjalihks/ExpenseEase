import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="mb-4">Privacy Policy</h1>
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-4">
                <h2 className="h4 mb-3">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul>
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Financial information</li>
                  <li>Transaction history</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you important updates</li>
                  <li>Improve our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3">3. Information Sharing</h2>
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul>
                  <li>Service providers</li>
                  <li>Legal authorities when required</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 mb-3">4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information, including:</p>
                <ul>
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls</li>
                  <li>Secure data storage</li>
                </ul>
              </section>

              <section>
                <h2 className="h4 mb-3">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <ul>
                  <li>Email: privacy@fintrack.com</li>
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

export default PrivacyPolicy; 