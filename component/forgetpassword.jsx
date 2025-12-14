import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { sendResetLink } from "./API";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await sendResetLink({ email });

      if (res.success) {
        toast.success("✅ Reset link sent to your email!");
      } else {
        toast.error("❌ Email not registered.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-color">
      <div className="signup-box shadow-lg p-4 p-md-5 bg-white rounded-4 position-relative m-5">
        <h5 className="mb-3">🔑 Forgot Password</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-gradient w-100 mt-2 fw-semibold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset OTP"}
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ForgetPassword;
