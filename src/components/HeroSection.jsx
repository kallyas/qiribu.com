import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./icons/Arrow";

const HeroSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="banner-1">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="color-brand-1 mb-20 text-anim">
                Take care of your workforce while taking care of business
              </h1>
              <div className="row">
                <div className="col-lg-9 wow animate__ animate__fadeInUp animated">
                  <div className="font-md color-grey-500 mb-30">
                    Unlock earned wage access, streamlined payroll processes,
                    and a comprehensive HR dashboard with Qiribu. Enhance
                    employee satisfaction and save time to prioritise business
                    growth. Explore our solutions now for a seamless employee
                    experience.
                  </div>
                </div>
              </div>
              <div className="box-button mt-30 wow animate__ animate__fadeInUp animated">
                <Link
                  target="_bank"
                  to="https://play.google.com/store/apps/details?id=com.qiribu&pli=1"
                  className="btn btn-brand-1 hover-up"
                >
                  Download the App
                </Link>
                <Link to="#" className="btn btn-default font-sm-bold hover-up">
                  Learn More <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block wow animate__ animate__fadeIn animated">
              <img src="hero_image.png" alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
