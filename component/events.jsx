import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import Footer from "../common/footer";

import Fancy1 from "../assets/pictures/fancy1.jpg";
import Fancy2 from "../assets/pictures/fancy2.jpg";
import Fancy3 from "../assets/pictures/fancy3.jpg";
import Fancy4 from "../assets/pictures/fancy4.jpg";
import Fancy6 from "../assets/pictures/fancy2.jpg";
import Fancy5 from "../assets/pictures/fancy5.jpeg";

import Sports1 from "../assets/pictures/sports1.jpg";
import Sports2 from "../assets/pictures/sports2.jpeg";
import Sports3 from "../assets/pictures/sports3.jpg";
import Sports4 from "../assets/pictures/sports4.png";
import Sports6 from "../assets/pictures/sports2.jpeg";
import Sports5 from "../assets/pictures/sports5.jpeg";

import Science4 from "../assets/pictures/science4.jpg";
import Science1 from "../assets/pictures/science1.webp";
import Science2 from "../assets/pictures/science2.webp";
import Science3 from "../assets/pictures/science3.jpg";
import Science6 from "../assets/pictures/science4.jpg";
import Science5 from "../assets/pictures/science5.webp";

import Music1 from "../assets/pictures/music1.jpg";
import Music2 from "../assets/pictures/music2.webp";
import Music3 from "../assets/pictures/music3.jpg";
import Music4 from "../assets/pictures/music4.jpg";
import Music5 from "../assets/pictures/music5.webp";
import Music6 from "../assets/pictures/music6.jpg";

import Memory1 from "../assets/pictures/science3.jpg";
import Memory2 from "../assets/pictures/sports1.jpg";
import Memory3 from "../assets/pictures/science4.jpg";
import Memory4 from "../assets/pictures/fancy4.jpg";
import Memory5 from "../assets/pictures/music6.jpg";
import Memory6 from "../assets/pictures/img2.jpg";
import img1 from "../assets/pictures/about1.jpg";
import img2 from "../assets/pictures/science1.webp";
import img3 from "../assets/pictures/sports2.jpeg";
import img4 from "../assets/pictures/students.avif";
import img5 from "../assets/pictures/science3.jpg";
import img6 from "../assets/pictures/about3.png";
import img7 from "../assets/pictures/classroom.png";
import img8 from "../assets/pictures/science2.webp";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const eventsData = [
    {
      title: "Fancy Dress Competition",
      description:
        "Students from pre-primary to Grade 2 showcased their creativity through vibrant costumes and exciting performances.",
      images: [Fancy1, Fancy2, Fancy3, Fancy4, Fancy5, Fancy6],
    },
    {
      title: "Annual Sports Day",
      description:
        "A spectacular display of sportsmanship and teamwork as students participated in track and field events, group games, and marches.",
      images: [Sports1, Sports2, Sports3, Sports4, Sports5, Sports6],
    },
    {
      title: "Science Exhibition",
      description:
        "Our budding scientists presented innovative models and projects promoting curiosity, creativity, and critical thinking.",
      images: [Science1, Science2, Science3, Science4, Science5, Science6],
    },
    {
      title: "Music & Dance Festival",
      description:
        "An evening of rhythm and melody with students performing classical, folk, and modern dance along with instrumental and vocal music.",
      images: [Music1, Music2, Music3, Music4, Music5, Music6],
    },
  ];

  return (
    <>
      <div className="container py-5">
        <h2
          className="text-center text-green mb-5 fw-bold display-5"
          data-aos="fade-down"
        >
          School Events Gallery
        </h2>

        {eventsData.map((event, index) => (
          <div
            key={index}
            className="row align-items-center mb-5"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6">
                  <h3 className="fw-bold">{event.title}</h3>
                  <p className="text-muted">{event.description}</p>
                </div>
                <div className="col-md-6">
                  <div className="row g-2">
                    {event.images.map((img, i) => (
                      <div className="col-6 col-md-4" key={i}>
                        <img
                          src={img}
                          alt={`${event.title} ${i + 1}`}
                          className="img-fluid rounded shadow-sm"
                          style={{
                            height: "120px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 order-md-2">
                  <h3 className="fw-bold">{event.title}</h3>
                  <p className="text-muted">{event.description}</p>
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="row g-2">
                    {event.images.map((img, i) => (
                      <div className="col-6 col-md-4" key={i}>
                        <img
                          src={img}
                          alt={`${event.title} ${i + 1}`}
                          className="img-fluid rounded shadow-sm"
                          style={{
                            height: "120px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        <h2
          className="text-center text-green mb-4 fw-bold display-6"
          data-aos="fade-up"
        >
          Gallery of Memories
        </h2>
        <div className="row g-3" data-aos="fade-up">
          {[
            Memory1,
            Memory2,
            Memory3,
            Memory4,
            Memory5,
            Memory6,
            img1,
            img2,
            img3,
            img4,
            img5,
            img7,
            img8,
            Memory1,
            Memory2,
            Memory3,
            Memory4,
            Memory5
          ].map((img, i) => (
            <div className="col-6 col-md-4 col-lg-2" key={i}>
              <img
                src={img}
                alt={`Memory ${i + 1}`}
                className="img-fluid rounded shadow-sm"
                style={{ height: "150px", objectFit: "cover", width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
