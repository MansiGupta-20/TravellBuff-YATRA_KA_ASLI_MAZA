import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "./API";
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
        toast.success("✅ Login Successful!");
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
        toast.success("✅ Login Successful!");
        navigate("/studentinfo");
      } else {
        toast.error("❌ Invalid email or password.");
      }
    } catch (err) {
      const msg =
        err.response?.status === 401
          ? "Invalid email or password."
          : err.response?.data?.message ||
            err.response?.data?.error ||
            err.message ||
            "Login failed. Please try again.";
      toast.error(`❌ ${msg}`);
    } finally {
      setLoading(false);
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
              <FaSignInAlt /> Login to Your Faculty Account
            </h5>
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
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-progress"
      />
    </>
  );
};

export default LoginPage;
