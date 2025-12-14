import axios from "axios";

const BASE_URL_SIGNUP = process.env.REACT_APP_API_URL_SIGNUP;
const CONTACT_URL = process.env.REACT_APP_API_URL_CONTACT;
const ADMISSION_URI = process.env.REACT_APP_API_URL_ADMISSION;
const STUDENT_URI = process.env.REACT_APP_API_URL_STUDENT;
const ADMIN_URI = process.env.REACT_APP_API_URL_ADMIN;

// SIGNUP PAGE
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL_SIGNUP}register`,
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

// LOGIN PAGE
export const loginUser = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL_SIGNUP}login`, user, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

// FORGOT PASSWORD PAGE
export const sendResetLink = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL_SIGNUP}forgot-password`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

// CONTACT PAGE
export const ContactUser = async (contactuser) => {
  try {
    const contact = await axios.post(`${CONTACT_URL}admission`, contactuser, {
      headers: { "Content-Type": "application/json" },
    });
    return contact.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

// ADMISSION PAGE
export const admissionUser = async (admissionUser) => {
  try {
    const admission = await axios.post(
      `${ADMISSION_URI}create`,
      admissionUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return admission.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

//STUDENT FORM
export const studentUser = async (studentUser) => {
  try {
    const admission = await axios.post(
      `${STUDENT_URI}createstudent`,
      studentUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return admission.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};
//ADMIN LOGIN
export const AdminUser = async (AdminUser) => {
  try {
    const login = await axios.post(
      `${STUDENT_URI}createstudent`,
      AdminUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return login.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};
