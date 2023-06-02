import React from "react";
import Arrow from "./icons/Arrow";
import { Link } from "react-router-dom";
import CheckMark from "./icons/CheckMark";

const BottomSection = () => {
  const employee_benefits = [
    "Instant cash flow",
    "Affordable fees",
    "Better budgeting",
    "Financial planning",
    "Access to financial services",
    "Peace of mind",
  ];
  return (
    <div className="row mb-100 mt-50 project-revert">
      <div className="col-xl-5 col-lg-6">
        <span className="btn btn-tag wow animate__ animate__fadeInUp animated">
          Employee
        </span>
        <h3 className="color-brand-1 mt-10 mb-15 wow animate__ animate__fadeInUp animated">
          Take control of your financial health
        </h3>
        <p className="font-md color-grey-400 wow animate__ animate__fadeInUp animated">
          Offering immediate access to earned wages helps employees avoid costly
          alternatives like high-interest loans or borrowing from friends. This
          puts employees back in control of their finances.
        </p>
        <div className="mt-20 wow animate__ animate__fadeInUp animated">
          <ul className="list-ticks">
            {employee_benefits.map((benefit, index) => (
              <li key={index}>
                <CheckMark />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-50 text-start wow animate__ animate__fadeInUp animated">
          <Link className="btn btn-brand-1 hover-up" to="#">
            Download App
          </Link>
          <Link className="btn btn-default font-sm-bold hover-up" to="#">
            Learn More
            <Arrow svgStyle={"w-6 h-6 icon-16 ml-5"} />
          </Link>
        </div>
      </div>
      <div className="col-xl-7 col-lg-6">
        <div className="box-images-project">
          <div className="box-images mt-50">
            <img className="img-main-2" src="lower_image.png" alt="qiribu" />
            <div className="image-3 shape-1">
              <img
                style={{ borderRadius: "50%" }}
                src="small_circle_logo.png"
                alt="qiribu"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
