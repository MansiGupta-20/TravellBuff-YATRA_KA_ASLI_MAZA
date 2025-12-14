import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserAlt, FaChalkboard, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const AttendanceForm = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [remarks, setRemarks] = useState("");
  const [students, setStudents] = useState([]);

  // ✅ Dummy student data grouped by class
  const studentData = {
    "10": [
      { rollNo: "1", name: "Rahul" },
      { rollNo: "2", name: "Priya" },
      { rollNo: "3", name: "Aman" },
    ],
    "9": [
      { rollNo: "1", name: "Sneha" },
      { rollNo: "2", name: "Ravi" },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  // 👇 When class changes, update student list
  useEffect(() => {
    if (selectedClass && studentData[selectedClass]) {
      setStudents(studentData[selectedClass]);
    } else {
      setStudents([]);
      setRollNo("");
    }
  }, [selectedClass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Attendance saved for Roll No: ${rollNo}, Class: ${selectedClass}`);
  };

  return (
    <div className="container-fluid bg-color py-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div
        className="col-lg-6 col-md-8 bg-white rounded-4 shadow-lg p-4 p-md-5"
        data-aos="fade-up"
        style={{ borderTop: "6px solid #7c267dff" }}
      >
        <h2 className="text-center mb-4 fw-bold display-6 text-green">
          Daily Attendance
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Class Input */}
            <div className="col-md-6" data-aos="fade-up">
              <label className="form-label fw-semibold">
                <FaChalkboard className="me-2 text-green" /> Class
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="10"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                required
              />
            </div>

            {/* Student Dropdown */}
            <div className="col-md-6" data-aos="fade-up">
              <label className="form-label fw-semibold">
                <FaUserAlt className="me-2 text-green" /> Student
              </label>
              <select
                className="form-select rounded-pill"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                disabled={!students.length}
                required
              >
                <option value="">-- Select Student --</option>
                {students.map((stu) => (
                  <option key={stu.rollNo} value={stu.rollNo}>
                    {stu.rollNo} - {stu.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="col-md-12" data-aos="fade-up">
              <label className="form-label fw-semibold">
                <FaCalendarAlt className="me-2 text-green" /> Date
              </label>
              <input
                type="date"
                className="form-control rounded-pill"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="col-md-12" data-aos="fade-up">
              <label className="form-label fw-semibold">
                <FaCheckCircle className="me-2 text-green" /> Status
              </label>
              <div className="d-flex gap-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="attendance"
                    id="present"
                    value="Present"
                    checked={status === "Present"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label className="form-check-label fw-semibold text-success" htmlFor="present">
                    Present
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="attendance"
                    id="absent"
                    value="Absent"
                    checked={status === "Absent"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label className="form-check-label fw-semibold text-danger" htmlFor="absent">
                    Absent
                  </label>
                </div>
              </div>
            </div>

            {status === "Absent" && (
              <div className="col-md-12" data-aos="fade-up">
                <label className="form-label fw-semibold">Remarks (Reason)</label>
                <textarea
                  className="form-control rounded-3"
                  rows="3"
                  placeholder="Sick leave / Late / Other"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  required
                ></textarea>
              </div>
            )}
          </div>

          <div className="text-center mt-5" data-aos="zoom-in">
            <button
              type="submit"
              className="btn btn-outline-brown fw-bold rounded-pill w-50"
            >
              Save Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendanceForm;
