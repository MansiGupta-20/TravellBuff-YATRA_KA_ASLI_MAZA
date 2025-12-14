import React, { useEffect, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../common/footer";
import "../App.css";
import { ContactUser } from "./API";
import Img from "../assets/pictures/about1.jpg";
import Img1 from "../assets/pictures/about2.png";
import Img2 from "../assets/pictures/about3.png";
import Img3 from "../assets/pictures/img2.jpg";
import Img4 from "../assets/pictures/img3.jpg";
import Fee from "../component/fee";

const AdmissionForm = () => {
  const [form, setForm] = useState({
    fatherName: "",
    motherName: "",
    parentPhone: "",
    parentEmail: "",
    studentName: "",
    grade: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fatherName: form.fatherName.trim(),
      motherName: form.motherName.trim(),
      studentName: form.studentName.trim(),
      parentPhone: form.parentPhone.trim(),
      parentEmail: form.parentEmail.trim(),
      grade: form.grade.trim(),
      message: form.message.trim(),
    };

    if (
      !payload.fatherName ||
      !payload.motherName ||
      !payload.studentName ||
      !payload.parentPhone ||
      !payload.parentEmail ||
      !payload.grade
    ) {
      toast.error("❌ Please fill all required fields!");
      return;
    }

    try {
      setLoading(true);
      await ContactUser(payload);
      toast.success("🎉 Response Successful! We will contact you soon.");
      setForm({
        fatherName: "",
        motherName: "",
        parentPhone: "",
        parentEmail: "",
        studentName: "",
        grade: "",
        message: "",
      });
      setServerError("");
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Submission failed. Please try again.";
      setServerError(msg);
      toast.error(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="full-width-banner text-center">
        <div className="position-relative text-center">
          <img
            src={Img}
            alt="banner"
            className="img-fluid w-100 banner-img dull-img"
            data-aos="zoom-in"
          />
          <div className="position-absolute top-50 start-50 translate-middle text-white banner-text">
            <h1 className="display-4 fw-bold">Welcome to St. Peter's School</h1>
            <p className="lead">Empowering Students for a Brighter Tomorrow</p>
          </div>
        </div>
        <h1 className="fw-bold text-green pt-4">Admission Enquiry - 2025</h1>
        <p className="text-muted">
          Join one of the most vibrant learning environments. Enquire now!
        </p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="fw-bold mb-4">OUR RESOURCE AT A GLANCE</h3>
            <ul className="list-unstyled fs-6">
              {[
                "New Implementations: Swimming Pool, ATAL Lab–Robotics, Auditorium, Scout & Guide.",
                "Smart Classrooms & Smart Panels.",
                "Science, Maths, Junior & Senior ICT Labs, Language Labs, Junior & Senior Libraries.",
                "Infirmaries for Safety & Healthcare.",
                "Volley & Handball Courts, Skating, Dance Rooms, Music Zone.",
                "RO Water Stations, Automatic Sanitization & Soap Stations.",
              ].map((item, index) => (
                <li className="mb-3" key={index}>
                  <FaCheckSquare className="text-primary me-2" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3">
              <div className="row g-2">
                {[Img1, Img2, Img3, Img4].map((src, i) => (
                  <div className="col-6" key={i}>
                    <img
                      src={src}
                      alt={`img${i}`}
                      className="img-fluid w-100 h-100 rounded shadow-sm"
                      style={{ objectFit: "cover", height: "130px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="form-box bg-white p-4 p-md-5">
              <h4 className="fw-bold mb-3">Parent's Information:</h4>
              <form className="fw-semibold" onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">
                      Father's Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={form.fatherName}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Father's Name / Guardian Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">
                      Mother's Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={form.motherName}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Mother's Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Parent's Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={form.parentPhone}
                    onChange={handleChange}
                    className="form-control small-light-placeholder"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Parent's Email Address{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={form.parentEmail}
                    onChange={handleChange}
                    className="form-control small-light-placeholder"
                    placeholder="Parent's Email Address"
                    required
                  />
                </div>

                <h4 className="fw-bold mb-3">Student's Information :</h4>
                <div className="mb-3">
                  <label className="form-label">
                    Student's Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    className="form-control small-light-placeholder"
                    placeholder="Student's Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Grade Seeking Admission to{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Grade</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>1st to 12th</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Any Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control small-light-placeholder"
                    rows="3"
                    placeholder="Enter message (optional)"
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-outline-brown fw-bold rounded-pill w-50 mt-3"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
                {serverError && (
                  <p className="text-danger mt-3 text-center">{serverError}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-progress"
      />

      <Fee />
      <Footer />
    </>
  );
};

export default AdmissionForm;
