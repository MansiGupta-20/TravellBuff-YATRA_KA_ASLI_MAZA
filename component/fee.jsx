import React from 'react';

const PricingPage = () => {
  const plans = [
    {
      id: 1,
      type: "Nursery & Kindergarten",
      price: "$500",
      priceNote: "/ term",
      description: "For early learners with a focus on foundational skills and creative play.",
      features: [
        "5 Days a Week",
        "Arts & Crafts Activities",
        "Basic Sports Training",
        "Parent-Teacher Meetings"
      ],
      note: "Uniforms and books charged separately.",
      isPopular: false
    },
    {
      id: 2,
      type: "Primary School",
      title: "Primary",
      price: "$800",
      priceNote: "/ term",
      description: "Comprehensive academics and co-curricular activities for Grades 1–5.",
      features: [
        "Full Academic Curriculum",
        "Sports & Music Classes",
        "Annual Day & Cultural Events",
        "Science & Art Workshops"
      ],
      note: "Transport facility available at extra cost.",
      isPopular: true
    },
    {
      id: 3,
      type: "High School",
      title: "High School",
      price: "$1200",
      priceNote: "/ term",
      description: "Advanced curriculum with career guidance and competitive exam support for Grades 6–10.",
      features: [
        "STEM & Advanced Subjects",
        "Sports & Clubs",
        "Career Counseling",
        "Educational Trips"
      ],
      note: "Includes library and lab access.",
      isPopular: false
    }
  ];

  return (
    <div className="pricing-container" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
      <div className="container">
        {/* Title & Subtitle */}
        <div className="row">
          <div className="col-12">
            <h1 className="main-title" style={{ fontSize: '2.2rem', marginBottom: '10px' }}>
              Affordable School Fees.<br />
              We <span className="grow-text">grow</span> with your child.
            </h1>
            <p className="subtitle" style={{ fontSize: '1rem', marginBottom: '20px' }}>
              Start with early learning and progress through primary and high school — all while 
              enjoying top-quality education and activities at reasonable fees.
            </p>
          </div>
        </div>

        {/* Plans */}
        <div className="row justify-content-center">
          {plans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div className={`pricing-card ${plan.isPopular ? 'popular-card' : ''}`} style={{ padding: '20px', minHeight: '350px' }}>
                {plan.isPopular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                
                <div className="plan-type">{plan.type}</div>
                <h3 className="plan-title">{plan.title}</h3>
                
                <div className="d-flex align-items-baseline">
                  <span className="plan-price">{plan.price}</span>
                  {plan.priceNote && <span className="price-note">{plan.priceNote}</span>}
                </div>
                
                <p className="plan-description">{plan.description}</p>
                
                <ul className="features-list" style={{ marginBottom: '10px' }}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="plan-note" style={{ fontSize: '0.85rem' }}>{plan.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: '20px' }}>
            <a href="/#" className="cta-button">Contact for Admission</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
