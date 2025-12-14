import React, { useState } from "react";
import { registerUser } from "./API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupModal = ({ show, handleClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    const rawMobile = form.mobileNumber || "";
    const digitsOnly = rawMobile.replace(/\D/g, "");
    const last10 = digitsOnly.slice(-10);

    if (!form.firstName.trim()) newErrors.firstName = "❌ First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "❌ Last name is required";
    if (!emailRegex.test(form.email.trim()))
      newErrors.email = "❌ Enter a valid email address";
    if (last10.length !== 10)
      newErrors.mobileNumber = "❌ Enter a 10-digit mobile number";
    if (!passwordRegex.test(form.password))
      newErrors.password =
        "❌ Password must contain at least 1 uppercase letter, 1 digit, and 1 special character.";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "❌ Passwords do not match";

    setErrors(newErrors);
    return { valid: Object.keys(newErrors).length === 0, normalizedMobile: last10 };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { valid, normalizedMobile } = validateForm();
    if (!valid) return;

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      mobileNumber: normalizedMobile,
      email: form.email.trim(),
      password: form.password,
    };

    try {
      setLoading(true);
      await registerUser(payload);
      toast.success("✅ Signup Successful! Please sign in.");
      handleClose();
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Signup failed. Please try again.";
      toast.error(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="modal show d-block fade" tabIndex="-1" role="dialog">
        <div
          className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down"
          role="document"
        >
          <div className="modal-content shadow-lg rounded-4 overflow-hidden">
            <div className="modal-header">
              <h5 className="modal-title text-green fw-bold">Create your account</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                  <label className="form-label fw-semibold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="first name"
                    required
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="last name"
                    required
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    className={`form-control ${
                      errors.mobileNumber ? "is-invalid" : ""
                    }`}
                    value={form.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile or +91..."
                    required
                  />
                  {errors.mobileNumber && (
                    <div className="invalid-feedback">{errors.mobileNumber}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">{errors.confirmPassword}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-brown w-100 rounded-pill mt-3"
                  disabled={loading}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
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
    </>
  );
};

export default SignupModal;
