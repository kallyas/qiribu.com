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
                  style={{ maxWidth: "50px" }}
                  src="logo_coral.png"
                  alt="Qiribu"
                />
              </div>
              <p className="font-md mb-20 color-grey-400">
                4517 Washington Ave.
                <br className="d-none d-lg-block" />
                Manchester, Kentucky 39495
              </p>
              <div className="font-md mb-20 color-grey-400">
                <strong className="font-md-bold">Hours:</strong> 8:00 - 17:00,
                Mon - Sat
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
                <li>
                  <Link to="about">Mission &amp; Vision</Link>
                </li>
                <li>
                  <Link to="team">Our Team</Link>
                </li>
                <li>
                  <Link to="career">Careers</Link>
                </li>
                <li>
                  <Link to="#">Press &amp; Media</Link>
                </li>
                <li>
                  <Link to="#">Advertising</Link>
                </li>
                <li>
                  <Link to="#">Testimonials</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1">Ressources</h5>
              <ul className="menu-footer">
                <li>
                  <Link to="#">Project managemen</Link>
                </li>
                <li>
                  <Link to="#">Solutions</Link>
                </li>
                <li>
                  <Link to="#">Customers</Link>
                </li>
                <li>
                  <Link to="#">News &amp; Events</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Support</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h5 className="mb-10 color-brand-1">We offer</h5>
              <ul className="menu-footer">
                <li>
                  <Link to="#">Project software</Link>
                </li>
                <li>
                  <Link to="#">Resource software</Link>
                </li>
                <li>
                  <Link to="#">Workflow automation</Link>
                </li>
                <li>
                  <Link to="#">Gantt chart makers</Link>
                </li>
                <li>
                  <Link to="#">Project dashboards</Link>
                </li>
                <li>
                  <Link to="#">Task software</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              <h5 className="mb-10 color-brand-1">App &amp; Payment</h5>
              <div>
                <p className="font-sm color-grey-400">
                  Download our Apps and enjoy the best Qiribu experience. <br />
                </p>
                <div className="mt-20">
                  <Link className="mr-10" to="#">
                    <img src="appstore.png" alt="Qiribu" />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://play.google.com/store/apps/details?id=com.qiribu"
                  >
                    <img src="google-play.png" alt="Qiribu" />
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
                    <Link
                      className="font-sm color-grey-300"
                      to="term-conditions"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-sm color-grey-300"
                      to="term-conditions"
                    >
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-sm color-grey-300"
                      to="term-conditions"
                    >
                      Terms of service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <span className="color-grey-300 font-md">
                  © {new Date().getFullYear()} Qiribu. All rights reserved.{" "}
                  <br className="d-none d-lg-block" /> Qiribu is a Fintech
                  product enabling salaried <br className="d-none d-lg-block" />{" "}
                  employees to access a portion of their earned
                  <br className="d-none d-lg-block" />
                  wages early. Please contact us for more{" "}
                  <br className="d-none d-lg-block" />
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
