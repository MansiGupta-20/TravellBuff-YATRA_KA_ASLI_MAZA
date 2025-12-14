import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFileAlt, FaUserCheck } from 'react-icons/fa';
import '../App.css';

const Admission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="admission-section py-5 mentor-section">
      <div className="container">
        <h2 className="text-center fw-bold text-green mb-5 display-3" data-aos="fade-down">
          Admission Information
        </h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-6  p-3" data-aos="fade-up">
            <div className=" h-100 shadow-lg p-4 rounded-5 hover-zoom process ">
              <div className="icon-circle  mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle " style={{ width: '60px', height: '60px' }}>
                <FaUserCheck size={28} />
              </div>
              <h4 className="fw-bold text-center mb-3">Admission Process</h4>
              <ul className="list-unstyled text-muted">
                <li>✓ Collect the admission form from the school office.</li>
                <li>✓ Fill in the required details and attach documents.</li>
                <li>✓ Submit the form before the due date.</li>
                <li>✓ Appear for a basic entrance test (for higher classes).</li>
                <li>✓ Pay admission fees upon selection.</li>
              </ul>
            </div>
          </div>

          {/* Card 2 - Documents */}
          <div className="col-md-6  p-3" data-aos="fade-up" data-aos-delay="200">
            <div className=" h-100 shadow-lg p-4 rounded-5 hover-zoom process">
              <div className="icon-circle mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px' }}>
                <FaFileAlt size={28} />
              </div>
              <h4 className="fw-bold text-center mb-3">Documents Required</h4>
              <ul className="list-unstyled text-muted">
                <li>✓ Birth Certificate Previous Class Marksheet</li>
                <li>✓ Previous Class Marksheet Previous Class Marksheet</li>
                <li>✓ 2 Passport  Previous Class MarksheetSize Photographs</li>
                <li>✓ Aadhar Card Copy Previous Class Marksheet</li>
                 <li>✓ Previous Class Previous Class Marksheet Marksheet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
