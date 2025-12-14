import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import mathImg from '../assets/pictures/science1.webp';
import onlineImg from '../assets/pictures/sports2.jpeg';
import languageImg from '../assets/pictures/about1.jpg';
import teacher1 from '../assets/pictures/science3.jpg';
import teacher2 from '../assets/pictures/science4.jpg';

const classes = [
  {
    title: 'Mathematics Class',
    img: mathImg,
    teacher: 'Rose Xara',
    price: '$29.99',
    age: '3-5 Years',
    time: '8-10 am',
    capacity: '30 Kids',
    teacherImg: teacher1
  },
  {
    title: 'Kids Online Class',
    img: onlineImg,
    teacher: 'Romeza Xara',
    price: '$29.99',
    age: '3-5 Years',
    time: '8-10 am',
    capacity: '30 Kids',
    teacherImg: teacher2
  },
  {
    title: 'Language Class',
    img: languageImg,
    teacher: 'Romeza Xara',
    price: '$29.99',
    age: '3-5 Years',
    time: '8-10 am',
    capacity: '30 Kids',
    teacherImg: teacher2
  }
];

const Classes = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-5 bg-light-purple">
      <div className="container text-center">
        <p className="text-purple fw-bold mb-1" data-aos="fade-up">On Going Classes</p>
        <h2 className="fw-bold display-5 text-green mb-5" data-aos="fade-up" data-aos-delay="100">
          Take The Classes & Start <br /> Learning From Today
        </h2>

        <div className="row justify-content-center gy-4">
          {classes.map((item, index) => (
            <div
              className="col-11 col-sm-6 col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <img src={item.img} className="class-img-top" alt={item.title} />
                <div className="card-body">
                  <h6 className="fw-bold text-start text-dark mb-2">{item.title}</h6>
                  <p className="text-muted small text-start">
                    Interactively brand client center through customized value good ideas.
                  </p>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={item.teacherImg}
                        alt={item.teacher}
                        className="rounded-circle teacher-img"
                      />
                      <div className="text-start">
                        <small className="fw-semibold text-dark d-block">{item.teacher}</small>
                        <small className="text-muted">Teacher</small>
                      </div>
                    </div>
                    <span className="badge bg-purple text-white fw-semibold p-2 px-3">{item.price}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between text-muted small">
                    <span><strong className="text-purple">Age:</strong> {item.age}</span>
                    <span><strong className="text-purple">Time:</strong> {item.time}</span>
                    <span><strong className="text-purple">Capacity:</strong> {item.capacity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;