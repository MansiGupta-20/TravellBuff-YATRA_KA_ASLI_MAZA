import React, { useEffect } from 'react';
import { FaUser, FaBook, FaChartLine, FaCalendarAlt, FaMoneyCheckAlt, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Footer from "../common/footer";
import Img from "../assets/pictures/profile.JPG";
import { useAuth } from "../component/context/AuthContext"; 

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    document.title = "Student Dashboard";
  }, []);

  const handleLogout = () => {
    logout();           
    navigate("/signin");
  };

  return (
    <>
      <div className="container-fluid dashboard-wrapper bg-light-purple text-dark py-5 animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="fw-bold text-green animate__animated animate__fadeInDown display-5">Student Dashboard</h2>
          </div>
        </div>
        <div className="row g-4 my-4">
          <div className="col-md-4">
            <div className="dashboard-card text-center animate__animated animate__zoomIn">
              <img src={Img} alt="Student" className="rounded-circle profile-img mb-3" />
              <h5 className="fw-bold">Mansi Gupta</h5>
              <p>ID: 22ADV3STL0055</p>
              <p>DOB: 17-Aug-2004</p>
              <p> <span className='fw-semibold'> Contact:</span> minikurele2004@gmail.com</p>
            </div>
          </div>

          <div className="col-md-8">
            <div className="dashboard-card animate__animated animate__fadeInRight">
              <h5 className="section-heading"><FaBook className="me-2" />Academic Information</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6 className="subheading">Current Courses</h6>
                  <ul className="list-group">
                    <li className="list-group-item">Math 101 - Algebra</li>
                    <li className="list-group-item">SCI 202 - Physics</li>
                    <li className="list-group-item">ENG 301 - Literature</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="subheading">Exam Results</h6>
                  <table className="table table-custom">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Math</td><td>A</td></tr>
                      <tr><td>Science</td><td>B+</td></tr>
                      <tr><td>English</td><td>A-</td></tr>
                    </tbody>
                  </table>
                  <p><strong>GPA:</strong> 3.7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 my-4">
          <div className="col-md-6">
            <div className="dashboard-card animate__animated animate__fadeInLeft">
              <h5 className="section-heading"><FaChartLine className="me-2" />Performance Metrics</h5>
              <div className="chart-container text-center">[Performance Graph Here]</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="dashboard-card animate__animated animate__fadeInRight">
              <h5 className="section-heading"><FaCalendarAlt className="me-2" />Attendance Record</h5>
              <p>Math: 92%</p>
              <p>Science: 88%</p>
              <p>English: 95%</p>
              <div className="attendance-calendar text-center">[Calendar View Here]</div>
            </div>
          </div>
        </div>

        <div className="row g-4 my-4">
          <div className="col-md-6">
            <div className="dashboard-card animate__animated animate__fadeInUp">
              <h5 className="section-heading"><FaMoneyCheckAlt className="me-2" />Fee Structure</h5>
              <ul className="list-group">
                <li className="list-group-item">Tuition Fee: ₹40,000</li>
                <li className="list-group-item">Lab Fee: ₹5,000</li>
                <li className="list-group-item">Library Fee: ₹2,000</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dashboard-card animate__animated animate__fadeInUp">
              <h5 className="section-heading">Payment Status</h5>
              <p className="fee-status">
                <span className="badge due">Fee Due: ₹7,000</span><br />
                <span>Due Date: 20-Aug-2025</span>
              </p>
              <h6 className="subheading mt-3">Payment History</h6>
              <ul className="list-group">
                <li className="list-group-item">Paid ₹20,000 - 01-Apr-2025</li>
                <li className="list-group-item">Paid ₹20,000 - 15-Jun-2025</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="notification-box animate__animated animate__fadeIn">
              <h5 className="section-heading"><FaBell className="me-2" />Notifications</h5>
              <ul className="list-group">
                <li className="list-group-item">Exam on 25-Aug-2025</li>
                <li className="list-group-item">Library fine due by 18-Aug-2025</li>
                <li className="list-group-item">Project submission deadline: 22-Aug-2025</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-outline-brown fw-bold rounded-pill w-50 mt-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
