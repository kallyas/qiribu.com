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
                    Qiribu offers earned wage access, streamlined payroll
                    processes, and a comprehensive HR dashboard. With us, you
                    can improve employee satisfaction and save valuable time so
                    you can focus on your growing your business.
                  </div>
                </div>
              </div>
              <div className="box-button mt-30 wow animate__ animate__fadeInUp animated">
                <Link to="#" className="btn btn-brand-1 hover-up">
                  Download the App
                </Link>
                <Link to="#" className="btn btn-default font-sm-bold hover-up">
                  Learn More <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block wow animate__ animate__fadeIn animated">
              Infographic goes here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
