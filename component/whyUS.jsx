import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import vision from '../assets/pictures/vision.png';
import mission from '../assets/pictures/mission.png';
import infra from '../assets/pictures/infra.png';
import facility from '../assets/pictures/facility.png';

const features = [
  {
    title: 'VISION',
    img: vision,
    desc: 'Every ST. Peters family member evolves into an effulgent gem dazzling in virtues unveiling ...',
  },
  {
    title: 'MISSION',
    img: mission,
    desc: 'Empowering the students to engrave the fervent feat of flare  ...',
  },
  {
    title: 'INFRASTRUCTURE',
    img: infra,
    desc: 'Our infrastructure serves as the foundation for a conducive learning environment. ...',
  },
  {
    title: 'FACILITIES',
    img: facility,
    desc: 'The infrastructure provided by our school can be broadly classified ...',
  },
];

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-3 text-green">WHY ST.PETER's SCHOOL</h2>
        <p className="mb-5">
          St. Peter's school is run under the auspicious of the Catholic Educational and Charitable Trust of Gwalior.
          It was established in 1997 by Rev. Fr. Fredrick Mendonca. The school is affiliated to CISCE Board, New Delhi,
          with permanent affiliation up to XII standard.
        </p>

        <div className="row g-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center ${
                idx !== features.length - 1 ? 'border-lg-end' : ''
              }`}
              style={{
                borderRight: idx !== features.length - 1 ? '1px solid #ccc' : 'none',
              }}
            >
              <div className="rounded-10 shadow-md h-100 section uscard w-100" data-aos="zoom-in-up">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top p-3"
                  style={{ height: '180px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                  <a href="/#" className="text-primary fw-semibold text-decoration-none">View details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
