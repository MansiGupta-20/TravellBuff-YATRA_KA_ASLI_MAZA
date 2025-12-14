import React, { useEffect } from 'react';
import '../App.css';
import AboutImg from '../assets/pictures/saint.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row g-4 align-items-start">
        <div className="col-md-5">
          <div className="align-item-center mt-5 ">
            <img
              src={AboutImg}
              alt="School View 3"
              className="custom-img "
              data-aos="zoom-in"
            />
          </div>
        </div>

        <div className="col-md-7">
          <h1 className="about-heading fw-bold mb-4">
            <span className="text-red display-5 fw-bold">WELCOME TO</span><br />
            St. Peter's <span className="text-green display-5 fw-bold">School</span>
          </h1>
          <p className="about-paragraph">
            <span className='initiall'>St. Peter's School</span> was founded in 2005 with the aim of providing quality education to children.
            Our mission is to build a strong foundation of knowledge, discipline, and character.
          </p>
          <p className="about-paragraph">
            St. Peter's school is run under the auspicious...
            ation up to XII standard. <br /><br />
            The Late Bishop Most Rev. Dr. Fredrick D’Souza, then bishop of Jhansi, had a desire to start a Mission Station in Dabra.
            Rev. Fr. Fredrick Mendonca purchased the present plot of land in 1993. He built the Priest House in 1997 and used Priest House for the school purpose.
            The school was run in two shifts. In March 2000, Rev. Fr. Frederick Mendonca went to Jhansi as had opted for the diocese of Jhansi which was bifurcated in 1999.
            Rev. Fr. Lawrence D’Souza was appointed as the new principal and he assumed office in March 2000. He got the school affiliated to CISCE Board and did a commendable job. <br /><br />
            He was transferred to St. Mary’s School, Morena in March 2005. Rev. Fr. Biju was succeeded by Rev. Fr. John Xavier in August 2005.
            In the following year, Rev. Fr. Joseph Chipson was appointed as the Principal in March 2006.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
