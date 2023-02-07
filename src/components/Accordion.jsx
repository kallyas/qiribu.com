import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button
          className={`accordion-button text-heading-5 ${ isOpen ? "collapsed" : ""}`}
          type="button"
          aria-controls="collapseOne"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </button>
      </h5>
      {isOpen && (
        <div data-bs-parent="#accordionFAQ" className={`accordion-collapse collapse ${isOpen ? "show" : ""}`} id="collapseOne">
          <div className="accordion-body">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
