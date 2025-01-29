import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Seamless Integration",
      description: "Easily integrate ExpenseEase with your existing tools and platforms.",
      icon: "bi bi-box-seam",
    },
    {
      title: "Secure Transactions",
      description: "State-of-the-art encryption ensures your data and payments are safe.",
      icon: "bi bi-shield-lock",
    },
    {
      title: "Real-Time Analytics",
      description: "Track payments and revenue in real-time with our intuitive dashboard.",
      icon: "bi bi-graph-up-arrow",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold">Why Choose ExpenseEase?</h2>
        <p className="text-center mb-5">
          Discover the features that make us stand out.
        </p>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="text-center">
                <i className={`${feature.icon} text-primary`} style={{ fontSize: "3rem" }}></i>
                <h4 className="mt-3">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
