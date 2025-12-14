import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import drawing from '../assets/pictures/girl.png';

const facts = [
  { label: 'Campus Area', value: '10 acres', icon: '🏞️' },
  { label: 'Built-Up Area', value: '159,280ft² Senior', icon: '🏫' },
  { label: 'Classrooms & Labs', value: '86 Classrooms + Labs', icon: '🎓' },
  { label: 'Libraries', value: '5 Libraries, 20,000+ books', icon: '📚' },
  { label: 'Rankings', value: 'No.1 Co-Ed School in MP', icon: '🥇' },
  { label: 'Rankings', value: 'No.1 Co-Ed School in MP', icon: '🥇' },
];

const Know = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-fluid py-5 know-section">
      <h2 className="fw-bold text-green text-center display-5 mb-4" data-aos="fade-right">
        Know Us More
      </h2>

      <div className="container">
        <div className="row align-items-center">
           <div className="col-lg-5 text-center d-flex justify-content-center align-items-center  " data-aos="fade-left">
            <img
              src={drawing}
              alt="St. Peter's School"
              className="img-fluid rounded-4 shadow-know image"
              style={{ maxWidth: '500px', width: '100%', height: '600px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="row g-4 mt-3">
              {facts.map((fact, idx) => (
                <div className="col-md-6" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                  <div className="bg-white card-green-top p-4 rounded-4 text-center h-100 shadow-know">
                    <div className="icon-circle mx-auto mb-3">{fact.icon}</div>
                    <h5 className="fw-bold">{fact.value}</h5>
                    <p className="text-muted small mb-0">{fact.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Know;
