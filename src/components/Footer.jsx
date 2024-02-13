import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 width-20">
              <div className="mb-10">
                <img
                  src="logo_text_coral.svg"
                  sizes="(max-width: 479px) 100vw, 479px"
                  style={{ width: "100px" }}
                  alt="logo"
                />
              </div>
              <p className="font-md mb-20 color-grey-400">
                851 Serumaga Rd.
                <br className="d-none d-lg-block" />
                Kampala, Uganda
              </p>
              <div className="font-md mb-20 color-grey-400">
                <strong className="font-md-bold">Hours:</strong> 8:00 - 17:00, Mon - Sat
              </div>
              <h6 className="color-brand-1">Follow Us</h6>
              <div className="mt-15">
                <Link className="icon-socials icon-facebook" to="#"></Link>
                <Link className="icon-socials icon-instagram" to="#"></Link>
                <Link className="icon-socials icon-twitter" to="#"></Link>
                <Link className="icon-socials icon-linkedin" to="#"></Link>
                <Link className="icon-socials icon-youtube" to="#"></Link>
              </div>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1">About Us</h5>
              <ul className="menu-footer">
                {[
                  { name: "Mission & Vision", link: "about" },
                  { name: "Terms and Conditions", link: "terms-conditions" },
                  { name: "Privacy policy", link: "privacy-policy" },
                  { name: "Qiribu Card policy", link: "card-policy" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30"></div>
            <div className="col-lg-3 width-16 mb-30"></div>
            <div className="col-lg-3 width-23">
              <div>
                <div className="mt-20">
                  <Link className="mr-10" to="#">
                    <img src="apple_store.png" style={{ maxWidth: "200px" }} alt="Qiribu" />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://play.google.com/store/apps/details?id=com.qiribu"
                  >
                    <img src="google_play.png" style={{ maxWidth: "200px" }} alt="Qiribu" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center text-lg-start">
                <ul className="menu-bottom">
                  <li>
                    <Link className="font-sm color-grey-300" to="terms-conditions">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link className="font-sm color-grey-300" to="terms-conditions">
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link className="font-sm color-grey-300" to="terms-conditions">
                      Terms of service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <span className="color-grey-300 font-md">
                  © {new Date().getFullYear()} Qiribu. All rights reserved.{" "}
                  <br className="d-none d-lg-block" /> Qiribu is a Fintech product enabling salaried{" "}
                  <br className="d-none d-lg-block" /> employees to access a portion of their earned
                  <br className="d-none d-lg-block" />
                  wages early. Please contact us for more <br className="d-none d-lg-block" />
                  information:
                  <Link to="mailto:hello@qiribu.com">hello@qiribu.com</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
