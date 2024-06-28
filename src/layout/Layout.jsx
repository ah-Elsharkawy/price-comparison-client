import React from "react";
import Footer from "../component/footer/Footer";
import MainNav from "../component/navbar/MainNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MainNav />

      <Outlet />

      <Footer />
    </>
  );
}
