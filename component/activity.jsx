import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const ChildrenService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-page py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-6" data-aos="fade-right">
            <div className="rounded-4 overflow-hidden shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
                alt="Children learning"
                className="img-fluid w-100 h-100 object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold display-6 text-green mb-4">
              We Help Your Child Grow & Excel
            </h2>

            <p className="text-muted mb-4">
              Our aim is to nurture every child's potential through engaging teaching, personal care,
              and a vibrant learning environment.
            </p>

            <div className="row g-3">
              <div className="col-12 d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box me-3 bg-light-pink">
                  <i className="fas fa-chalkboard-teacher text-danger"></i>
                </div>
                <div>
                  <h5 className="text-green fw-bold mb-1">Expert Instructor</h5>
                  <p className="text-muted small mb-0">Skilled mentors with child-friendly methods.</p>
                </div>
              </div>

              <div className="col-12 d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box me-3 bg-light-purple">
                  <i className="fas fa-graduation-cap text-green"></i>
                </div>
                <div>
                  <h5 className="text-green fw-bold mb-1">Complete Learning</h5>
                  <p className="text-muted small mb-0">Balanced growth in academics, activities, and values.</p>
                </div>
              </div>

              <div className="col-12 d-flex" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box me-3 bg-light-blue">
                  <i className="fas fa-heart text-info"></i>
                </div>
                <div>
                  <h5 className="text-green fw-bold mb-1">Care & Well-being</h5>
                  <p className="text-muted small mb-0">We foster a safe, happy, and loving environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </div>
  );
};

export default ChildrenService;
