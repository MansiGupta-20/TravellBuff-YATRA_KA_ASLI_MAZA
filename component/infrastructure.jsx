// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import img1 from '../assets/pictures/about1.jpg';
// import img2 from '../assets/pictures/science1.webp';
// import img3 from '../assets/pictures/sports2.jpeg';
// import img4 from '../assets/pictures/students.avif';
// import img5 from '../assets/pictures/science3.jpg';
// import img6 from '../assets/pictures/about3.png';
// import img7 from '../assets/pictures/classroom.png';
// import img8 from '../assets/pictures/science2.webp';

// const OpenGarden = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const images = [img1, img2, img3, img4, img5, img6, img7, img8];

//   return (
//     <div className="pt-5">
//       <div className="shadow-sm p-4 bg-light-purple">
//         <h2 className="text-center mb-4 text-green display-6 fw-bold">Our Gallery</h2>

//         <div className="container">
//           <div className="professional-collage">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`collage-box ${index % 3 === 0 ? 'wide' : ''} ${
//                   index % 4 === 0 ? 'tall' : ''
//                 }`}
//                 data-aos="zoom-in"
//               >
//                 <img src={image} alt={`Garden ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <p className="text-center mt-4 fs-5 text-muted fw-semibold">
//           “To plant a garden is to dream of tomorrow.”
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OpenGarden;
