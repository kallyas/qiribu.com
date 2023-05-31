import React from "react";
import Arrow from "./icons/Arrow";
import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  const { title, description, link, image } = offer;
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 wow animate__ animate__fadeInUp animated">
      <div className="card-offer hover-up">
        <div className="card-image">
          <img src={image ?? "cross.png"} alt="qiribu" />
        </div>
        <div className="card-info">
          <h4 className="color-brand-1 mb-15">{title}</h4>
          <p className="font-md color-grey-500 mb-15">{description}</p>
          <div className="box-button-offer">
            <Link
              to={link ?? "/"}
              className="btn btn-default font-sm-bold pl-0 color-brand-1"
            >
              Learn More
              <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
