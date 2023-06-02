import React from "react";
import { Link } from "react-router-dom";

const TestimonialCard = ({ data }) => {
  const { author, company, date, rating, content } = data;
  return (
    <div className="card-testimonial-grid">
      <div className="box-author mb-10">
        <Link to="#">
          <img src="https://via.placeholder.com/150" alt="author" />
        </Link>
        <div className="author-info">
          <Link to="#">
            <span className="font-md-bold color-brand-1 author-name">
              {author}
            </span>
          </Link>
          <span className="font-xs color-grey-500 department">{company}</span>
        </div>
      </div>
      <p className="font-md color-grey-500">{content}</p>
      <div className="card-bottom-info">
        <span className="font-xs color-grey-500 date-post">{date}</span>
        <div className="rating text-end">
          {Array(rating)
            .fill(rating)
            .map((_, item) => (
              <img key={item} src="star.svg" alt="ratings" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
