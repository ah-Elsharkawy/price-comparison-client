import React from "react";
import Footer from "../component/footer/Footer";
import MainNav from "../component/navbar/MainNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MainNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1">testing side</div>
          <div className="col-md-11">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
