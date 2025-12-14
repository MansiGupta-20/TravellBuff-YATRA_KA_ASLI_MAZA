import React from "react";
import Pic1 from "../assets/pictures/img1.avif";
import Pic2 from "../assets/pictures/img2.jpg";
import Pic3 from "../assets/pictures/img3.jpg";
import Facilities from "./facilities";
import Know from "./know";
import Why from "./whyUS";
import About from "./about";
import Footer from "../common/footer";
import Admission from "./admission";
import Mentor from "./mentor";
import Schoolbuild from "./schoolbuild";
import ChildrenService from "./activity";
import "../App.css";
// import OpenGarden from "./infrastructure";


const Home = () => {
  return (
    <>
     <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
      <div className="container-fluid p-0">
       
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Pic1}
                className="d-block w-100 "
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Pic2}
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Pic3}
                className="d-block w-100 "
                alt="Slide 3"
              />
            </div>
          </div>
        </div>
      </div>

      <About className="mb-5"/>
      <Mentor className="mb-5"/>
      <Facilities className="mb-5"/>
      <Schoolbuild className="mb-5" />
      <Why className="mb-5" />
      <Admission className="mb-5"/>
      <ChildrenService />
      <Know className="mb-5"/>
      {/* <OpenGarden/> */}
       <Footer/>
      </>
   
  );
};

export default Home;
