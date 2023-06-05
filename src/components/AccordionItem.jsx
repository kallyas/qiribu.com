import React, { useState } from "react";

function AccordionItem({ question, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="accordion-item wow animate__ animate__fadeInUp">
      <h5
        onClick={() => setAccordionOpen((prev) => !prev)}
        className="accordion-header"
      >
        <button
          className={`accordion-button text-heading-5 ${
            accordionOpen ? "" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${question}`}
          aria-expanded={accordionOpen}
          aria-controls={`collapse${question}`}
        >
          {question}
        </button>
      </h5>
      <div
        className={`accordion-collapse collapse ${accordionOpen ? "show" : ""}`}
        id={`collapse${question}`}
        data-bs-parent="#accordionFAQ"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
