import React from "react";
import { useRouteError, Link } from "react-router-dom";
import BackArrow from "../components/icons/BackArrow";
import Arrow from "../components/icons/Arrow";
import Navbar from "../components/Navbar";
import ScrollToTop from "react-scroll-up";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <main className="main">
        <section className="section box-404">
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row align-items-center">
                  <div className="col-md-5 col-sm-12 mb-30 text-center text-md-start">
                    <img src="404.png" alt="qiribu" />
                  </div>
                  <div className="col-md-7 col-sm-12 text-center text-md-start">
                    <h1 className="color-brand-1 font-84 mb-10">
                      {error.status || 500}
                    </h1>
                    <h3 className="color-brand-1 mb-25">
                      Oops, {error.status === 404 && "Page Not Found"}
                      {error.status !== 404 && "Internal Server Error"}
                    </h3>
                    <p className="font-md color-grey-500">
                      {error.status === 404 &&
                        "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
                      {error.status !== 404 &&
                        "The server encountered an internal error or misconfiguration and was unable to complete your request."}
                    </p>
                    <div className="mt-50">
                      <Link
                        className="btn btn-default color-grey-900 pl-0"
                        to="/"
                      >
                        <BackArrow svgStyle="w-6 h-6 icon-16 mr-5" />
                        Back to Homepage
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom bd-grey-80 mt-110 mb-0"></div>
          </div>
        </section>
        <section className="section mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-small card-small-2">
                  <div className="card-image">
                    <div className="box-image">
                      <img src="support_icon.png" alt="qiribu" />
                    </div>
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">Help &amp; support</h6>
                    <p className="font-xs color-grey-500">
                      Email:{" "}
                      <a
                        className="color-success"
                        href="mailto:support@qiribu.com"
                      >
                        support@qiribu.com
                      </a>
                      <br />
                      For technical support with our products or refer to FAQs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-small card-small-2">
                  <div className="card-image">
                    <div className="box-image">
                      <img src="call_us.png" alt="qiribu" />
                    </div>
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">Call Us</h6>
                    <p className="font-xs color-grey-500">
                      Call us to speak to a member of our team.
                      <br />
                      (+256) 0 786 881 540
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-small card-small-2">
                  <div className="card-image">
                    <div className="box-image">
                      <img src="business_development.png" alt="qiribu" />
                    </div>
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">
                      Bussiness Development
                    </h6>
                    <p className="font-xs color-grey-500">
                      Contact the sales department about colloborations and
                      partnerships
                      <br />
                      (+256) 0 786 881 540
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="d-inline-block mb-30"></div>
        <section className="section mt-50">
          <div className="container">
            <div className="box-newsletter box-newsletter-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 m-auto text-center">
                  <span className="font-lg color-brand-1">Newsletter</span>
                  <h2 className="color-brand-1 mb-15 mt-5">
                    Subcribe our newsletter
                  </h2>
                  <p className="font-md color-grey-500">
                    Do not miss the latest information from us about the
                    trending in the market. By clicking the submit button, you
                    are agreeing with our Term &amp; Conditions
                  </p>
                  <div className="form-newsletter mt-30">
                    <form action="#">
                      <input type="text" placeholder="Enter you mail .." />
                      <button
                        className="btn btn-submit-newsletter"
                        type="submit"
                      >
                        <Arrow svgStyle="w-6 h-6 icon-16" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
  transitionDuration: "0.2s",
  backgroundColor: "#024430",
};

export default ErrorPage;
