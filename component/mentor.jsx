// src/component/Mentor.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import directorImg from '../assets/pictures/teacher4.jpg';
import principalImg from '../assets/pictures/teacher3.webp';
import director2Img from '../assets/pictures/teacher1.jpg';
import principal2Img from '../assets/pictures/teacher2.webp';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../App.css';

const mentors = [
  {
    name: 'Rev. Sr. ASHA BENNAN',
    title: 'Director',
    img: directorImg,
    message: `Parents have many expectations… Students have brighter dreams… Teachers have greater responsibility… Our school is a temple and every student is a seeker of knowledge.\nJAI HIND! JAI BHARAT!`,
  },
  {
    name: "Sr. Merina Tintu D'cruz",
    title: 'Principal',
    img: principalImg,
    message: `“The roots of education are bitter, but the fruit is sweet.” An educational institution takes pride not in buildings, but in the students who study there—their discipline, high standards, and goodwill.`,
  },
  {
    name: 'Mr. John Mathew',
    title: 'Vice Principal',
    img: director2Img,
    message: `Committed to fostering a challenging yet nurturing environment where students thrive academically and personally.`,
  },
  {
    name: 'Mrs. Ritu Sharma',
    title: 'Academic Coordinator',
    img: principal2Img,
    message: `Focusing on innovative teaching strategies and continuous learning to shape responsible future citizens.`,
  },
];

const Mentor = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <section className="py-5 mentor-section">
      <div className="container text-center">
        <p className="text-green fw-bold" data-aos="fade-up">Our Expert Staff</p>
        <h2 className="fw-bold display-5 text-green mb-5" data-aos="fade-up" data-aos-delay="100">
          Most Dedicated Teachers <br />For Your Child
        </h2>

        <div className="row justify-content-center gy-4">
          {mentors.map((mentor, index) => (
            <div className="col-10 col-sm-6 col-md-4 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <img src={mentor.img} className="card-img-top object-fit-cover" style={{ height: '220px' }} alt={mentor.name} />
                <div className="card-body d-flex flex-column align-items-center">
                  <h6 className="fw-bold text-dark mb-1">{mentor.name}</h6>
                  <small className="text-muted mb-2">{mentor.title}</small>
                  <div className="d-flex gap-2 justify-content-center">
                    <FaFacebookF className="text-primary" />
                    <FaTwitter className="text-info" />
                    <FaInstagram className="text-danger" />
                  </div>
                </div>
                <button
                  className="btn bg-purple  rounded-circle position-absolute bottom-0 end-0 m-3"
                  onClick={() => setSelectedMentor(mentor)}
                >
                  <i className="fas fa-comment-dots text-white"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMentor && (
        <div className="modal d-block" tabIndex="-1" onClick={() => setSelectedMentor(null)}>
          <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success">{selectedMentor.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedMentor(null)}></button>
              </div>
              <div className="modal-body">
                <p className="text-muted small mb-2">{selectedMentor.title}</p>
                <p>{selectedMentor.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mentor;
