import React from "react";
import Arrow from "./icons/Arrow";
import CheckMark from "./icons/CheckMark";
import Close from "./icons/Close";
import { Link } from "react-router-dom";

const PricingCard = ({ offer }) => {
  const { title, description, image, price, offer_list } = offer;
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 wow animate__ animate__fadeIn animated">
      <div className="card-plan hover-up">
        <div className="card-image-plan">
          <div className="icon-plan">
            <img src={image ?? "cross.png"} alt="qiribu" />
          </div>
          <div className="info-plan">
            <h4 className="color-brand-1">{title}</h4>
            <p className="font-md color-grey-400">{description}</p>
          </div>
        </div>
        <div className="box-day-trial">
          <span className="font-lg-bold color-brand-1">{price.split('-')[0]}</span>
          <br />
          <span className="font-xs color-grey-500">{price.split('-')[1]}</span>
        </div>
        <div className="mt-30 mb-30">
          <ul className="list-ticks list-ticks-2">
            {offer_list.map((item, index) => (
              <li key={index} className={item.is_checked ? "" : "mutted"}>
                {item.is_checked ? <CheckMark /> : <Close />}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-20">
          <Link to="#" className="btn btn-brand-1-full hover-up" href="#">
            Get Started
            <Arrow svgStyle="w-6 h-6 icon-16 ml-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
