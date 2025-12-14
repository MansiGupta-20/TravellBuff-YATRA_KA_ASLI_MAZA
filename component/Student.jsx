// StudentDetailsForm.jsx
import React, { useState, useEffect } from "react";
import { studentUser } from "./API";
import "../App.css";
import Footer from "../common/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AttendanceForm from "./AttendanceForm";

const StudentDetailsForm = () => {
  const [fullName, setFullName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [totalFee, setTotalFee] = useState("");
  const [feePaid, setFeePaid] = useState("");
  const [remainingFee, setRemainingFee] = useState("");

  // Detailed Academics
  const [tests, setTests] = useState("");
  const [exams, setExams] = useState("");
  const [projects, setProjects] = useState("");
  const [assignments, setAssignments] = useState("");

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    setRemainingFee(totalFee && feePaid ? totalFee - feePaid : "");
  }, [totalFee, feePaid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullName,
      selectedClass,
      rollNo,
      dob,
      email,
      totalFee,
      feePaid,
      remainingFee,
      academics: { tests, exams, projects, assignments },
    };

    try {
      const res = await studentUser(payload);
      if (res.success) {
        toast.success("✅ Student details saved!", { position: "top-right" });
      } else {
        toast.error("❌ Failed to save student details.", { position: "top-right" });
      }
    } catch (err) {
      toast.error("❌ Error saving student details!", { position: "top-right" });
    }
  };

  return (
    <>
      <div className="container-fluid bg-color py-5 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="col-lg-9 bg-white rounded-4 shadow-lg p-4 p-md-5" data-aos="fade-up">
          <h2 className="text-center mb-4 text-green fw-bold display-6" data-aos="zoom-in">
            Student Details Form
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Basic Details */}
            <section className="mb-4">
              <h5 className="text-green fw-bold mb-3 border-start border-4 ps-2">
                Basic Information
              </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Class</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="10"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Roll No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="25"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Academics */}
            <section className="mb-4">
              <h5 className="text-green fw-bold mb-3 border-start border-4 ps-2">
                Academic Performance
              </h5>
              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Tests (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="85"
                    value={tests}
                    onChange={(e) => setTests(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Exams (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="90"
                    value={exams}
                    onChange={(e) => setExams(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Projects (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="80"
                    value={projects}
                    onChange={(e) => setProjects(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Assignments (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="75"
                    value={assignments}
                    onChange={(e) => setAssignments(e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Fee Details */}
            <section className="mb-4">
              <h5 className="text-green fw-bold mb-3 border-start border-4 ps-2">Fee Details</h5>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Total Fee</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="50000"
                    value={totalFee}
                    onChange={(e) => setTotalFee(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Fee Paid</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="35000"
                    value={feePaid}
                    onChange={(e) => setFeePaid(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Remaining Fee</label>
                  <input
                    type="number"
                    className="form-control bg-light"
                    value={remainingFee}
                    readOnly
                  />
                </div>
              </div>
            </section>

            <div className="text-center mt-5">
              <button type="submit" className="btn btn-outline-brown fw-bold rounded-pill w-50">
                Save Student Details
              </button>
            </div>
          </form>
        </div>
      </div>
      <AttendanceForm/>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default StudentDetailsForm;
