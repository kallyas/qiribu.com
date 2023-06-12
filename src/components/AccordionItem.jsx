import React, { useState } from "react";

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="accordion-item wow animate__ animate__fadeInUp">
      <h5 onClick={onToggle} className="accordion-header">
        <button
          className={`accordion-button text-heading-5 ${isOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${question}`}
          aria-expanded={isOpen}
          aria-controls={`collapse${question}`}
        >
          {question}
        </button>
      </h5>
      <div
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        id={`collapse${question}`}
        data-bs-parent="#accordionFAQ"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
