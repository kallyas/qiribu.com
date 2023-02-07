import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
      <ScrollToTop style={scrollUpStyle} showUnder={160}>
        <i className="fi-rr-arrow-small-up"></i>
      </ScrollToTop>
    </>
  );
};

export const scrollUpStyle = {
  width: "56px",
  height: "56px",
  color: "#fff",
  right: "20px",
  bottom: "20px",
  borderRadius: "8px",
  textAlign: "center",
  textDecoration: "none",
  overflow: "hidden",
  zIndex: "999 !important",
  border: "0",
  backgroundColor: "#fff",
  transitionDuration: "0.2s",
  backgroundColor: "#024430",
};

export default Layout;
