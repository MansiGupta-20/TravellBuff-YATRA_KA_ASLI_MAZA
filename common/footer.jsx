import React from 'react';
import logo from '../assets/pictures/logo.png';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';
import '../App.css'; 

const Footer = () => {
  return (
    <footer className="text-white py-5 px-4 footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4 text-center text-md-start mt-5">
            <img src={logo} alt="School Logo" className="mb-3" style={{ width: '140px' }} />
            <h2 className="mb-1  fw-bold">St. Peters School</h2>
            <h3 className="text-light  fw-bold">Dabra (M.P)</h3>
          </div>

          <div className="col-md-4">
            <h5 className=' fw-bold'>Get in touch</h5>
            <p>📞 +91-731-2444401 / 4937612</p>
            <p>📱 +91-9109384463</p>
            <p>✉️ stpsind@dpsabra.org</p>
            <p>📍 Simaria Tekri, Dabra, Distt. Gwalior, MP.</p>
            <hr className="border-light my-2" />
            <h6 className="mt-3">Want To Work With Us</h6>
            <p className="mb-1">Send Your CV:</p>
            <p>✉️ st.petersdba@gmail.com</p>
          </div>

          <div className="col-md-4">
            <h5 className=' fw-bold'>Quick Links</h5>
            <p>🧑‍🏫 Careers</p>
            <p>🎓 Alumni Connect</p>
            <p>📄 Transfer Certificate</p>

            <div className="d-flex justify-content-start align-items-center flex-wrap gap-4 ps-3 footer-social-icons">
              <a href="/#" target="_blank" rel="noreferrer">
                <FaFacebookF className="social-icon" />
                <p className="small text-white">Facebook</p>
              </a>
              <a href="/#" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" />
                <p className="small text-white">Instagram</p>
              </a>
              <a href="/#" target="_blank" rel="noreferrer">
                <FaYoutube className="social-icon" />
                <p className="small text-white">YouTube</p>
              </a>
              <a href="/#" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
                <p className="small text-white">LinkedIn</p>
              </a>
              <a href="/#" target="_blank" rel="noreferrer">
                <FaTelegram className="social-icon" />
                <p className="small text-white">Telegram</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-4 rounded  fw-bold small">
          © {new Date().getFullYear()} St. Peters School, Dabra (M.P). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
