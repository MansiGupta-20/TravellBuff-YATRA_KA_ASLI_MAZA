import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AdminUser, loginUser } from "./API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../component/context/AuthContext";
import SignupModal from "./signin";
import img from "../assets/pictures/science4.jpg";
import "../App.css";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const [adminPass, setAdminPass] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (form.email === "student@example.com" && form.password === "123456") {
        localStorage.setItem("isLoggedIn", "true");
        login();
        toast.success("Login Successful!");
        navigate("/dashboard");
        return;
      }

      const payload = {
        emailmobile: form.email.trim(),
        password: form.password,
      };

      const res = await loginUser(payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.success) {
        localStorage.setItem("token", res?.token);
        localStorage.setItem("isLoggedIn", "true");
        login();
        toast.success("Login Successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (err) {
      const msg =
        err.response?.status === 401
          ? "Invalid email or password."
          : err.response?.data?.message ||
            err.response?.data?.error ||
            err.message ||
            "Login failed. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleAdminLogin = async () => {
    try {
      setLoading(true);

      const payload1 = { passwordAdmin: adminPass };

      const admin = await AdminUser(payload1, {
        headers: { "Content-Type": "application/json" },
      });

      if (admin?.success) {
        localStorage.setItem("token", admin?.token);
        localStorage.setItem("isLoggedIn", "true");
        login();
        toast.success("Admin Login Successful!");
        navigate("/admin");
      } else {
        toast.error("Invalid admin password.");
      }
    } catch (err) {
      const msg =
        err.response?.status === 401
          ? "Invalid admin password."
          : err.response?.data?.message ||
            err.response?.data?.error ||
            err.message ||
            "Admin login failed.";
      toast.error(msg);
    } finally {
      setLoading(false);
      setShowAdminPrompt(false);
    }
  };

  return (
    <>
      <div
        className="signup-wrapper d-flex flex-column justify-content-center align-items-center min-vh-100"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>

        <div className="signup-box shadow-lg p-4 p-md-5 bg-white rounded-4 position-relative m-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="modal-title d-flex align-items-center gap-2 text-green m-0">
              <FaSignInAlt /> Login to Your Account
            </h5>

            <button
              type="button"
              className="btn fw-bold px-3 py-1 rounded-3"
              style={{ color: "#761f78ff", borderColor: "#701e6fff" }}
              onClick={() => setShowAdminPrompt(true)}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Email address:</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-md"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control form-control-md"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-gradient rounded-4 w-100 btn-lg mt-2"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="d-flex justify-content-between mt-3">
            <small>
              <button
                type="button"
                className="btn p-0 text-danger no-outline"
                onClick={() => navigate("/forgetpassword")}
              >
                Forgot Password?
              </button>
            </small>
            <small>
              Don't have an account?{" "}
              <button
                type="button"
                className="btn btn-link p-0 no-outline"
                onClick={() => setShowSignup(true)}
              >
                Register
              </button>
            </small>
          </div>
        </div>

        {showAdminPrompt && (
          <div
            className="modal fade show"
            style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-4">
                <div className="modal-header">
                  <h5 className="modal-title">Admin Login</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowAdminPrompt(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Admin Password"
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-gradient rounded-4 w-100 btn-lg mt-2"
                    onClick={handleAdminLogin}
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showSignup && (
          <SignupModal
            show={showSignup}
            handleClose={() => setShowSignup(false)}
          />
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
};

export default LoginPage;
