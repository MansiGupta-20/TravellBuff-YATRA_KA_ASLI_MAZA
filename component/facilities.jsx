// src/component/Facilities.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

import cricketImg from '../assets/pictures/cricket.webp';
import footballImg from '../assets/pictures/sports4.png';
import computerImg from '../assets/pictures/sports2.jpeg';



const facilities = [
  {
    title: 'Expert Sessions',
    img: cricketImg,
    desc: 'Interactive sessions from professionals to enhance student skills.',
    color: 'bg-light-orange text-orange-dark'
  },
  {
    title: 'Libraries',
    img: footballImg,
    desc: 'Well-stocked libraries with digital and physical learning material.',
    color: 'bg-light-purple text-purple-dark'
  },
  {
    title: 'Sports',
    img: computerImg,
    desc: 'Modern sports infrastructure to promote physical development.',
    color: 'bg-light-teal text-teal-dark'
  },
];

const Facilities = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="facility-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold display-5 text-green" data-aos="fade-up">
          Our Facilities
        </h2>
        <p className="text-center mt-3 text-muted px-md-5" data-aos="fade-up">
          Nestled within lush green surroundings, our state-of-the-art facilities create an environment that nurtures
          the holistic growth of every student. Our commitment to excellence is reflected in our outstanding academic
          results and the numerous achievements of our students in sports and the arts, earning us a prestigious
          reputation in the city and state.
        </p>

        <div className="row justify-content-center mt-5">
          {facilities.map((facility, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index} data-aos="fade-up">
              <div className={`facility-card-new text-center p-0 shadow-sm ${facility.color}`}>
                <div className="facility-top-image position-relative">
                  <img src={facility.img} alt={facility.title} className="img-fluid w-100 facility-rectangle-img" />
                  <div className="position-absolute top-0 start-0 m-2 rounded-circle icon-wrapper d-flex align-items-center justify-content-center">
                    {facility.icon}
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="fw-bold mb-2 text-start">{facility.title}</h5>
                  <p className="text-muted small mb-3 text-start">{facility.desc}</p>
                  <div className="text-start">
                    <button className="btn btn-link btn-facility no-outline">See Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
