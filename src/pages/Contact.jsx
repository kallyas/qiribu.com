import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Arrow from "../components/icons/Arrow";
import Accordion from "../components/Accordion";

const Contact = () => {
  return (
    <>
      <section className="section banner-contact">
        <div className="container">
          <div className="banner-1">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span className="title-line line-48">Get in Touch</span>
                <h1 className="color-brand-1 mb-20 mt-10">
                  We’d love to hear
                  <br className="d-none d-lg-block" />
                  from you.
                </h1>
                <div className="row">
                  <div className="col-lg-9">
                    <p className="font-md color-grey-500">
                      Request a demo, ask a question, or get in touch here. If
                      you’re interested in working at Iori Coporation, check out
                      our
                      <Link className="ml-3" to="/careers">
                        {" "}
                        careers page.
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="mt-30">
                  <h5 className="color-brand-1">Install App</h5>
                </div>
                <div className="box-button mt-20">
                  <Link className="btn-app mb-15 hover-up" to="#">
                    <img
                      src="assets/imgs/template/appstore-btn.png"
                      alt="qiribu"
                    />
                  </Link>
                  <Link className="btn-app mb-15 hover-up" to="#">
                    <img
                      src="assets/imgs/template/google-play-btn.png"
                      alt="qiribu"
                    />
                  </Link>
                  <Link
                    className="btn btn-default mb-15 pl-10 font-sm-bold hover-up"
                    to="#"
                  >
                    Learn More
                    <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div className="box-banner-contact">
                  <img src="assets/imgs/page/contact/banner.png" alt="qiribu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card-small card-small-2">
                <div className="card-image">
                  <div className="box-image">
                    <img
                      src="assets/imgs/page/contact/headphone.png"
                      alt="qiribu"
                    />
                  </div>
                </div>
                <div className="card-info">
                  <h6 className="color-brand-1 mb-10">Help &amp; support</h6>
                  <p className="font-xs color-grey-500">
                    Email{" "}
                    <a
                      className="color-success"
                      href="mailto:support@qiribu.com"
                    >
                      support@qiribu.com{" "}
                    </a>
                    <br />
                    For help with a current product or service or refer to FAQs
                    and developer tools
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card-small card-small-2">
                <div className="card-image">
                  <div className="box-image">
                    <img
                      src="assets/imgs/page/contact/phone.png"
                      alt="qiribu"
                    />
                  </div>
                </div>
                <div className="card-info">
                  <h6 className="color-brand-1 mb-10">Call Us</h6>
                  <p className="font-xs color-grey-500">
                    Call us to speak to a member of our team.
                    <br />
                    (+01) 234 567 89
                    <br />
                    (+01) 456 789 21
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card-small card-small-2">
                <div className="card-image">
                  <div className="box-image">
                    <img
                      src="assets/imgs/page/contact/chart.png"
                      alt="qiribu"
                    />
                  </div>
                </div>
                <div className="card-info">
                  <h6 className="color-brand-1 mb-10">Bussiness Department</h6>
                  <p className="font-xs color-grey-500">
                    Contact the sales department about cooperation projects
                    <br />
                    (+01) 789 456 23
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card-small card-small-2">
                <div className="card-image">
                  <div className="box-image">
                    <img
                      src="assets/imgs/page/contact/earth.png"
                      alt="qiribu"
                    />
                  </div>
                </div>
                <div className="card-info">
                  <h6 className="color-brand-1 mb-10">Global branch</h6>
                  <p className="font-xs color-grey-500">
                    Contact us to open our branches globally.
                    <br />
                    (+01) 234 567 89
                    <br />
                    (+01) 456 789 23
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="color-brand-1 mb-15">Get in touch</h2>
              <p className="font-sm color-grey-500">
                Do you want to know more or contact our sales department?
              </p>
              <div className="mt-50">
                <div className="card-offer card-we-do card-contact hover-up">
                  <div className="card-image">
                    <img src="assets/imgs/page/contact/img1.png" alt="qiribu" />
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">
                      Visit the Knowledge Base
                    </h6>
                    <p className="font-md color-grey-500 mb-5">
                      Browse customer support articles and step-by-step
                      instructions for specific features.
                    </p>
                  </div>
                </div>
                <div className="card-offer card-we-do card-contact hover-up">
                  <div className="card-image">
                    <img src="assets/imgs/page/contact/img2.png" alt="qiribu" />
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">
                      Watch Product Videos
                    </h6>
                    <p className="font-md color-grey-500 mb-5">
                      Watch our video tutorials for visual walkthroughs on how
                      to use our features.
                    </p>
                  </div>
                </div>
                <div className="card-offer card-we-do card-contact hover-up">
                  <div className="card-image">
                    <img src="assets/imgs/page/contact/img3.png" alt="qiribu" />
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">
                      Get in touch with Sales
                    </h6>
                    <p className="font-md color-grey-500 mb-5">
                      Let us talk about how we can help your enterprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="box-form-contact">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group mb-25">
                      <input
                        className="form-control icon-user"
                        type="text"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group mb-25">
                      <input
                        className="form-control icon-email"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group mb-25">
                      <input
                        className="form-control icon-phone"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group mb-25">
                      <input
                        className="form-control icon-company"
                        type="text"
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-25">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-25">
                      <textarea
                        className="form-control textarea-control"
                        placeholder="Write something"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9">
                    <div className="form-group">
                      <button
                        className="btn btn-brand-1-full font-sm"
                        type="submit"
                      >
                        Send message
                        <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="no-bg-faqs">
        <section className="section pt-80 mb-30 bg-faqs">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20">
                  Frequently asked questions
                </h2>
                <p className="font-lg color-gray-500">
                  Feeling inquisitive? Have a read through some of our FAQs or
                  <br className="d-none d-lg-block" /> contact our supporters
                  for help
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <a className="btn btn-default font-sm-bold pl-0">
                  Contact Us
                  <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                </a>
              </div>
            </div>
            <div className="row mt-50 mb-100">
              <div className="col-xl-3 col-lg-4">
                <ul className="list-faqs nav nav-tabs" role="tablist">
                  <li>
                    <a
                      className="active"
                      href="#tab-support"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-controls="tab-support"
                      aria-selected="true"
                    >
                      <span>General Support</span>
                      <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                    </a>
                  </li>
                </ul>
                <div className="mt-80 text-start mb-40">
                  <a className="btn btn-brand-1 hover-up" href="#">
                    Contact Us
                  </a>
                  <a className="btn btn-default font-sm-bold hover-up" href="#">
                    Support Center
                    <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                  </a>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div
                  className="tab-content tab-content-slider"
                  id="tab-support"
                  role="tabpanel"
                  aria-labelledby="tab-support"
                >
                  <div className="tab-pane fade active show">
                    <div className="accordion" id="accordionFAQ">
                      <Accordion
                        title="How do I get started?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
                  Do not miss the latest information from us about the trending
                  in the market. By clicking the button, you are agreeing with
                  our Term &amp; Conditions
                </p>
                <div className="form-newsletter mt-30">
                  <form action="#">
                    <input type="text" placeholder="Enter you mail .." />
                    <button className="btn btn-submit-newsletter" type="submit">
                      <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
