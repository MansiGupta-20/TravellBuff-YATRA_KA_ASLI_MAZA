import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import Footer from "../common/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import kidsImage from "../assets/pictures/aadmission-1.png";
import AboutImg from "../assets/pictures/admissionimg2.jpg";
import AboutImg2 from "../assets/pictures/admissionImg1.jpg";
import { admissionUser } from "./API";

const Admission = () => {
  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    gender: "",
    classApplyingFor: "", 
    previousSchool: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    address: "",
    declaration: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.declaration) {
      toast.error("⚠️ Please confirm the declaration before submitting.");
      return;
    }

    try {
      setLoading(true);
      await admissionUser(form);
      toast.success("🎉 Admission form submitted successfully!");

      setForm({
        studentName: "",
        dob: "",
        gender: "",
        classApplyingFor: "", 
        previousSchool: "",
        fatherName: "",
        motherName: "",
        email: "",
        phone: "",
        address: "",
        declaration: false,
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Submission failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <div className="row g-4 align-items-start">
          <div className="col-md-5 p-5">
            <img
              src={AboutImg}
              alt="School View"
              className="img-fluid rounded h-200 "
              data-aos="zoom-in"
            />
          </div>
          <div className="col-md-7">
            <h1 className="fw-bold mb-4" data-aos="zoom-in">
              <span className="text-danger">Admissions At</span>
              <br />
              St. Peter's <span className="text-green">School</span>
            </h1>
            <div className="container mt-3 about-paragraph" data-aos="fade-up">
              <h4 className="fw-bold mb-3">
                Important Admission Notes (2025-26)
              </h4>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  • Submission of registration form does not imply confirmed
                  admission.
                </li>
                <li className="mb-2">
                  • For admission in <strong>Pre Nursery</strong> for session
                  2025-26, the ward must complete 3 years as on{" "}
                  <strong>31/03/2025</strong>. (As per DOE guidelines)
                </li>
                <li className="mb-2">
                  • Please ensure the registration form is complete in every
                  respect.
                </li>
                <li className="mb-2">
                  • Any wrong information or non-disclosure may lead to
                  non-admission or cancellation of admission.
                </li>
                <li className="mb-2">
                  <strong>Step – 1:</strong> You can fill & submit the
                  registration form online at{" "}
                  <a
                    href="https://www.dpsindore.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.stpdabra.org
                  </a>{" "}
                  or obtain it from the admission office on campus.
                </li>
                <li className="mb-2">
                  <strong>Step – 2:</strong> Students are supposed to appear for
                  an admission test or offline/online interaction based on which
                  admission is confirmed.
                </li>
                <li className="mb-2">
                  <strong>Step – 3:</strong> After confirmation of admission,
                  self-attested documents must be submitted, which will be
                  verified with the originals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="container mt-5">
        <div className="row g-4 align-items-start">
          <div className="col-md-7">
            <h1 className="fw-bold mb-4">
              <span className="text-danger">List of required documents</span>
              <br />
            </h1>
            <div className="mt-3" data-aos="fade-up">
              <h4 className="fw-bold mb-3">
                Please refer to the list of required documents required at the
                time of filling the registration form:
              </h4>
              <ul className="list-unstyled text-muted about-pragraph">
                <li className="mb-2">
                  • Birth certificate of the ward. (Original)
                </li>
                <li className="mb-2">
                  • Recent formal photograph of the ward and both parents.
                  (Cleared Passport Size)
                  <ul>
                    <li className="mb-2">
                      Please ensure the registration form is complete in every
                      respect.
                    </li>
                    <li className="mb-2">
                      The photograph should have white background
                    </li>
                    <li className="mb-2">
                      The photograph should not be less than 3 months old
                    </li>
                    <li className="mb-2">
                      The photograph should not be blurred
                    </li>
                    <li className="mb-2">
                      The photograph should be in portrait format of 3 cm x 4 cm
                      size
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  • Any wrong information or non-disclosure may lead to
                  non-admission or cancellation of admission.
                </li>
                <li className="mb-2">
                  <strong>Step – 1:</strong> You can fill & submit the
                  registration form online at{" "}
                  <a
                    href="https://www.dpsindore.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.stpdabra.org
                  </a>{" "}
                  or obtain it from the admission office on campus.
                </li>
                <li className="mb-2">
                  <strong>Step – 2:</strong> Students are supposed to appear for
                  an admission test or offline/online interaction based on which
                  admission is confirmed.
                </li>
                <li className="mb-2">
                  <strong>Step – 3:</strong> After confirmation of admission,
                  self-attested documents must be submitted, which will be
                  verified with the originals.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5 text-center mt-5 pt-5">
            <img
              src={AboutImg2}
              alt="School View"
              className="img-fluid rounded h-100 mt-5"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* Admission Form */}
      <section className="admission-section py-5 bg-color">
        <div className="container">
          <div className="row g-5 align-items-center ">
            <div className="col-lg-6 " data-aos="fade-right">
              <h2 className="fw-bold text-green mb-3 text-center">
                Admission Inquiry
              </h2>
              <br />
              <p className="text-muted mb-4 fw-bold">
                Fill out the form below and our team will reach out to you
                shortly.
              </p>

              <form
                className="bg-white p-4 rounded-4 shadow-md hover-shadow-green border border-3"
                onSubmit={handleSubmit}
              >
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="form-label">Student Full Name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={form.studentName}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label ">Gender</label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className="form-select small-light-placeholder "
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Class Applying For</label>
                    <input
                      type="text"
                      name="classApplyingFor" 
                      value={form.classApplyingFor}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Enter the class"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Previous School</label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={form.previousSchool}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Enter school name (if any)"
                    />
                  </div>

                  <div className="col-12">
                    <hr />
                    <h6 className="text-success">Parent/Guardian Details</h6>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Father's Name</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={form.fatherName}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Father Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mother's Name</label>
                    <input
                      type="text"
                      name="motherName"
                      value={form.motherName}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Mother Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email ID</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="abc@gmail.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Residential Address</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="form-control small-light-placeholder"
                      rows="3"
                      placeholder="Address"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <div className="form-check mt-2">
                      <input
                        type="checkbox"
                        name="declaration"
                        checked={form.declaration}
                        onChange={handleChange}
                        className="form-check-input"
                        id="declaration"
                        required
                      />
                      <label className="form-check-label" htmlFor="declaration">
                        I confirm that the information provided is accurate.
                      </label>
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-brown mt-1 px-4 rounded-pill"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Form"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="col-lg-6 d-flex align-items-stretch pt-5"
              data-aos="fade-left"
            >
              <div className="w-100 h-100 rounded-4 mt-5 ">
                <img
                  src={kidsImage}
                  alt="Kids learning"
                  className="img-fluid w-100 h-100 object-fit-cover rounded-5"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col text-center" data-aos="fade-up">
              <h3 className="fw-bold text-green mb-3">St. Peter's School</h3>
              <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
                Admission at St. Peter's School is simple and transparent.
                Submit your form along with documents. Interaction or entrance
                may be conducted depending on the class. Begin your child’s
                journey to excellence here.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <Footer />
    </>
  );
};

export default Admission;
