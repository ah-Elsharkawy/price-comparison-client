import React from "react";
import Footer from "../component/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
// import
export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <div className="contianer">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
