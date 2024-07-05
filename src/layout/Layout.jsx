import React from "react";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-sky-600">side bar</div>

          <div className="bg-slate-600 w-10/12">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
