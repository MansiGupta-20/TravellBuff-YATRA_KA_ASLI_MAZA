import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../common/navbar";
import Home from "../component/home";
import Info from "../component/aboutMain";
import Contact from "../component/contact";
import Event from "../component/events";
import Admission from "../component/admissionpage";
import Login from "../component/login";
import Dashboard from "../component/dashboard";
import ProtectedRoute from "../routes/protectedroute";
import Admin from "../component/Admin";
import ForgetPassword from "../component/forgetpassword";
import StudentInfo from "../component/Student";
import ToggleList from "../component/toggle";




const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Event />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/studentinfo" element={<StudentInfo />} />
        <Route path="/toggle" element={<ToggleList />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
