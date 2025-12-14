import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import school from '../assets/pictures/school.png';
import AboutImg from '../assets/pictures/principle1.png';
import { FaBookOpen, FaChalkboardTeacher, FaMicroscope, FaFlask } from 'react-icons/fa';
import Footer from '../common/footer';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
<>
    <div className="container py-5 text-center" >
      <h2 className="fw-bold mb-3 text-green display-5" data-aos="zoom-in">About Us</h2>
      <p className="lead fw-semibold" data-aos="zoom-in">Empowering students for a brighter future</p>

      <div className="row justify-content-center gx-5">
 
        <div className="col-md-6 col-lg-5 mb-4" data-aos="zoom-in">
          <div className="shadow-green1 rounded-4 h-100 bg-light-purple">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
              <h5 className="fw-bold text-green">Our Mission</h5>
              <p>
                To provide quality education that nurtures creativity, critical thinking,
                and holistic development in a supportive environment.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-5 mb-4" data-aos="zoom-in">
          <div className="shadow-green1 rounded-4 h-100  bg-light-orange">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
              <h5 className="fw-bold text-green">Our Vision</h5>
              <p>
                To be a leading institution where students grow intellectually, emotionally,
                and socially into responsible citizens.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row g-4 align-items-start">
          <div className="col-md-5">
            <img
              src={AboutImg}
              alt="School View"
              className="img-fluid rounded-5 shadow-sm mt-5"
              data-aos="zoom-in"
            />
          </div>
          <div className="col-md-7">
            <h1 className="fw-bold mb-5 pt-5 text-start">
              <span className="text-danger">Welcome From Principle</span><br />
              St. Peter's <span className="text-green">School</span>
            </h1>
            <div className="container mt-3 text-start about-paragraph" data-aos="fade-up">
              <p className='about-paragraph'>
                 <span className='fw-bold text-start d-block ml-3'>Dear Parents, Students and Community Members,</span>
                 <span className='fw-bold text-start d-block ml-3'>Greetings of the day!</span>
                As the Principal of Delhi Public School Indore, it is my great honour and privilege to welcome you to our school’s website. I am happy to lead a school community dedicated to fostering an environment where every student can thrive both academically and personally.
                <br />
                At DPS Indore, we believe that education is a journey of exploration and discovery. Our mission is to provide a holistic education that not only focuses on academic excellence but also emphasizes the importance of character, creativity, and collaboration. We are committed to nurturing well-rounded individuals who are prepared to face the challenges of the future with confidence and compassion. <br /> Ours is co-educational institution primarily started for the education of the Catholic children of Dabra. Other children are also admitted without any consideration of caste, creed, and status. It pays special attention to the formation of character with sound moral principles. It aims at the over all personality development of the students.</p>
            </div>
          
          </div>
        </div>
      </div>
        <div className='text-start about-paragraph'>
              <p>Our dedicated team of educators is passionate about creating a supportive and stimulating learning environment. We strive to inspire our students to develop a lifelong love for learning, encouraging them to think critically, act responsibly, and contribute positively to society. Our diverse curriculum is designed to cater to the unique needs and interests of each student, ensuring that they are equipped with the skills and knowledge necessary to succeed in an ever-changing world.

                We also recognize the vital role that parents and the broader community play in the educational process. We value your partnership and encourage active involvement in school activities and events. Open communication and collaboration between home and school are essential to our students’ success, and we are committed to maintaining a strong and supportive relationship with all our stakeholders.
                <br /><br />
                This website is a comprehensive resource for information about our school’s programs, policies, and upcoming events. We invite you to explore the various sections and stay informed about the latest news and developments at DPS Indore. Whether you are a current member of our school community or a prospective family considering joining us, we hope you find this site helpful and informative.
                <br /><br />
                I am excited about the opportunities that lie ahead and look forward to working with you to create a vibrant and dynamic learning environment at DPS Indore. Together, we can ensure that every student achieves their full potential and enjoys a fulfilling educational experience.</p>
              
                <br />
                <span className='fw-bold text-start  d-block ml-3'>Warm regards</span>
                <br />
                <span className='fw-bold text-start d-block'>Rev. Sr. ASHA BENNAN</span>
               <span className='fw-bold text-start d-block'> Principal, St. Peter's School Dabra (M.p) </span>
              </div>

      <div className="container my-5 pt-3" >
        <div className="row align-items-center">

          <div className="col-md-7 text-start" data-aos="fade-up">
            <h1 className="text-danger fw-bold">Why To Choose</h1>
            <h1 className="fw-bold text-green">ST. PETER'S SCHOOL</h1>
            <p className="text-secondary mt-4 about-paragraph">
              St. Peter's school is run under the auspicious of the Catholic Educational and Charitable Trust of Gwalior.
              St. Peter’s School Dabra, was established in 1997 by Rev. Fr. Fredrick Mendonca...    <br />  <br /> Lawrence D’Souza was appointed as the new principal and he assumed office in March 2000. He got the school affiliated to CISCE Board and did a commendable job. He was transferred to St. Mary’s School, Morena in March 2005. Rev. Fr. Biju was succeeded by Rev. Fr. John Xavier in August 2005. In the following year, Rev. Fr. Joseph Chipson was appointed as the Principal in March 2006. He got the permanent affiliation upto XII standard. Hindi Medium was closed due to lack of sufficient students. In July 2008, Rev. Fr. Alphonse and Rev. Fr. Eugene were appointed as the Manager and the Principal respectively. Rev. Fr. Lawrence D’Souza became Principal for a second term from 7th June 2010 to 28th January 2015.
              <br />
            </p>
            <a href="https://www.stpeterschooldabra.com/index.php" className=" btn-link p-0 mt-1">View details</a>
          </div>

          <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in">
            <img src={school} alt="St. Peter's School" className="img-fluid rounded-5 shadow-green bg-light-orange" />
          </div>
        </div>
      </div>
      <div className="container py-5 academics-section" id="academics">
        <h2 className="text-center fw-bold mb-4 text-green" data-aos="fade-up">
          Academics
        </h2>
        <p className="text-center mb-5 text-muted" data-aos="fade-up">
          Our commitment to excellence in academics helps students unlock their potential through modern teaching techniques and strong values.
        </p>

        <div className="row g-4 ">
          <div className="col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="academic-card p-4 rounded-circle shadow-sm h-100 text-center bg-light-purple">
              <FaBookOpen size={50} className="mb-3 text-green" />
              <h5 className="fw-bold">Curriculum</h5>
              <p className="text-muted">
                A well-structured CISCE curriculum that nurtures academic, social, and emotional growth.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="academic-card p-4 rounded-circle shadow-sm h-100 text-center bg-light-pink">
              <FaChalkboardTeacher size={50} className="mb-3 text-green" />
              <h5 className="fw-bold">Expert Faculty</h5>
              <p className="text-muted">
                Experienced, passionate teachers dedicated to shaping the future of every child.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="academic-card p-4 rounded-circle shadow-sm h-100 text-center bg-light-blue">
              <FaMicroscope size={50} className="mb-3 text-green" />
              <h5 className="fw-bold">Laboratories</h5>
              <p className="text-muted">
                State-of-the-art labs that inspire innovation and foster hands-on scientific learning.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="academic-card p-4 rounded-circle shadow-sm h-100 text-center bg-light-yellow">
              <FaFlask size={50} className="mb-3 text-green" />
              <h5 className="fw-bold">Co-Curricular</h5>
              <p className="text-muted">
                Balanced focus on arts, sports, and cultural activities alongside academics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-4 h-120 border zoom-hover p-4 mt-4 bg-color" data-aos="fade-up">
        <div className=" text-center">
          <h2 className="fw-bold display-8 text-green justify-text">St. Peter's School</h2>
          <p className='about-paragraph'>
            Ours is co-educational institution primarily started for the education of the Catholic children of Dabra.
            Other children are also admitted without any consideration of caste, creed, and status. It pays special attention... <br /><br />St. Peter's school is run under the auspicious of the catholic Educational and Charitable Trust of Gwalior.
            St. Peter’s School Dabra, was established in 1997 by Rev. Fr. Fredrick Mendonca. The school is affiliated to CISCE Board, New Delhi. It has a permanent affiliation up to XII standard. <br /><br />
            The Late Bishop Most Rev. Dr. Fredrick D’Souza, then bishop of Jhansi, had a desire to start a Mission Station in Dabra. Rev. Fr. Fredrick Mendonca purchased the present plot of land in 1993. He built the Priest House in 1997 and used Priest House for the school purpose. The school was run in two shifts. In March 2000, Rev. Fr. Frederick Mendonca went to Jhansi as had opted for the diocese of Jhansi which was bifurcated in 1999. Rev. Fr. Lawrence D’Souza was appointed as the new principal and he assumed office in March 2000. He got the school affiliated to CISCE Board and did a commendable job. He was transferred to St. Mary’s School, Morena in March 2005. Rev. Fr. Biju was succeeded by Rev. Fr. John Xavier in August 2005. In the following year, Rev. Fr. Joseph Chipson was appointed as the Principal in March 2006. He got the permanent affiliation upto XII standard. Hindi Medium was closed due to lack of sufficient students. In July 2008, Rev. Fr. Alphonse and Rev. Fr. Eugene were appointed as the Manager and the Principal respectively. Rev. Fr. Lawrence D’Souza became Principal for a second term from 7th June 2010 to 28th January 2015. When he was transferred to St. Michael’s School, Bhind, Rev. Fr. Joseph Chakkalakkal succeeded him and assumed office as the Principal on 29th January 2015 till 19th July 2021 and was succeeded by Rev. Fr. Dilip Nanda on 20th July 2021 to 18th  June 2023.
            Now Present Principal of School is Rev. Sr. Asha Bennan fom 19th June 2023 till Date. <br /><br />

            Ours is co-educational institution primarily started for the education of the Catholic children of Dabra. Other children are also admitted without any consideration of caste, creed, and status. It pays special attention to the formation of character with sound moral principles. It aims at the over all personality development of the students.
          </p>
        </div>
      </div>
    </div>
 <Footer/>
 </>
  );
};

export default About;
